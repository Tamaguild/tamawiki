"use strict";

/* ---------------------------------------------------------------------- */
/* Seekers: three grades, letter bands (A = closest ring, outward to       */
/* silence). Grade counts down from best (g1); Tier counts up from         */
/* weakest (t1) - they are NOT the same numbering scheme.                  */
/* ---------------------------------------------------------------------- */

function buildBand(letter, min, max) { return { letter, min, max }; }
function bandIsSilent(b) { return !isFinite(b.max); }
function bandRangeText(b) {
  return bandIsSilent(b) ? `${fmt(b.min,0)}+ blocks (no sound)` : `${fmt(b.min,0)}-${fmt(b.max,0)} blocks`;
}

function buildTier(name, grade, gradeNumber, thresholds) {
  const bands = [];
  const n = thresholds.length;
  bands.push(buildBand('A', 0, thresholds[n - 1]));
  for (let k = 1; k < n; k++) bands.push(buildBand(String.fromCharCode(65 + k), thresholds[n - k] + 1, thresholds[n - k - 1]));
  bands.push(buildBand(String.fromCharCode(65 + n), thresholds[0] + 1, Infinity));
  return { name, grade, gradeNumber, thresholds, bands, reach: thresholds[0], label: `Grade ${grade} - ${name}` };
}

const SEEKERS = {
  makeshift: buildTier('Makeshift Ghost Seek', 'III', 3, [150, 100, 50, 25]),
  repaired: buildTier('Repaired Ghost Seek', 'II', 2, [200, 150, 100, 50, 25]),
  refined: buildTier('Refined Ghost Seek', 'I', 1, [250, 200, 150, 100, 50, 25]),
};

function seekerFind(tier, letter) {
  const up = letter.toUpperCase();
  return tier.bands.find(b => b.letter === up) || null;
}

// Grade: g1/grade1 -> Refined (best) .. g3/grade3 -> Makeshift (weakest).
// Tier:  t1/tier1  -> Makeshift (weakest) .. t3/tier3 -> Refined (best).
// Opposite numbering schemes for the same three items - see Seekers.cs's own comment.
function seekerParse(input) {
  let s = (input || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  if (s.length === 0) return null;
  if (s.includes("makeshift")) return SEEKERS.makeshift;
  if (s.includes("repaired")) return SEEKERS.repaired;
  if (s.includes("refined")) return SEEKERS.refined;

  s = s.replace("ghostseeker", "").replace("ghostseek", "").replace("ghost", "")
       .replace("seeker", "").replace("seek", "").replace("relic", "");

  if (s.startsWith("grade")) return parseGrade(s.slice("grade".length));
  if (s.startsWith("tier")) return parseTier(s.slice("tier".length));
  if (s.startsWith("g")) return parseGrade(s.slice(1));
  if (s.startsWith("t")) return parseTier(s.slice(1));
  return null;

  function parseGrade(x) { return x === "1" || x === "i" ? SEEKERS.refined : x === "2" || x === "ii" ? SEEKERS.repaired : x === "3" || x === "iii" ? SEEKERS.makeshift : null; }
  function parseTier(x) { return x === "1" ? SEEKERS.makeshift : x === "2" ? SEEKERS.repaired : x === "3" ? SEEKERS.refined : null; }
}

/* ---------------------------------------------------------------------- */
/* Readings                                                                */
/* ---------------------------------------------------------------------- */

function distanceTo(r, x, y, z, metric) {
  const dx = Math.abs(x - r.x), dy = Math.abs(y - r.y), dz = Math.abs(z - r.z);
  return metric === "Chebyshev" ? Math.max(dx, dy, dz) : Math.sqrt(dx * dx + dy * dy + dz * dz);
}
// The seeker reports a rounded distance, so a true 100.04 still counts as "100" and must
// pass a 51-100 band. Math.round matches MidpointRounding.AwayFromZero for any non-negative
// input, which distance always is.
function readingSatisfies(r, x, y, z, metric) {
  const d = Math.round(distanceTo(r, x, y, z, metric));
  return d >= r.minDist && d <= r.maxDist;
}
function isSilentReading(r) { return !isFinite(r.maxDist); }
function bandText(r) { return isSilentReading(r) ? `${fmt(r.minDist,0)}+ (silent)` : `${fmt(r.minDist,0)}-${fmt(r.maxDist,0)}`; }
function posText(r) { return `(${fmt(r.x,1)}, ${fmt(r.y,1)}, ${fmt(r.z,1)})`; }

// Accepts the band letter, or nothing/none/silent/silence/x/- for out of range.
function resolveBand(tier, raw) {
  const s = raw.trim().toLowerCase();
  if (["nothing", "none", "silent", "silence", "x", "-"].includes(s)) return tier.bands[tier.bands.length - 1];
  if (s.length === 1 && /[a-z]/.test(s)) return seekerFind(tier, s);
  return null;
}

/* ---------------------------------------------------------------------- */
/* Analysis: pairwise shell compatibility, recency-weighted confidence,    */
/* track partitioning for multi-skeleton scenarios                         */
/* ---------------------------------------------------------------------- */

const RECENCY_DECAY = 0.85;
const SLACK = 1.0;

function compatible(a, b, metric) {
  const d = distanceTo(a, b.x, b.y, b.z, metric);
  const lo = Math.max(0, a.minDist - b.maxDist, b.minDist - a.maxDist);
  const hi = a.maxDist + b.maxDist;
  return d >= lo - SLACK && d <= hi + SLACK;
}
function recencyWeight(seq, newestSeq) { return Math.pow(RECENCY_DECAY, Math.max(0, newestSeq - seq)); }

function computeConfidence(readings, metric) {
  const scores = new Map();
  if (readings.length === 0) return scores;
  const newest = Math.max(...readings.map(r => r.seq));
  for (const r of readings) {
    let agree = 0, conflict = 0;
    for (const other of readings) {
      if (other === r) continue;
      const w = recencyWeight(other.seq, newest);
      if (compatible(r, other, metric)) agree += w; else conflict += w;
    }
    const total = agree + conflict;
    scores.set(r.seq, total <= 0 ? 1.0 : Math.min(1, Math.max(0, 0.5 + 0.5 * (agree - conflict) / total)));
  }
  return scores;
}

function findConflicts(readings, metric) {
  const pairs = [];
  for (let i = 0; i < readings.length; i++)
    for (let j = i + 1; j < readings.length; j++)
      if (!compatible(readings[i], readings[j], metric)) pairs.push([readings[i], readings[j]]);
  return pairs;
}

// Greedy, newest-first: each reading joins the first track it's compatible with every member of.
function buildTracks(readings, metric) {
  const tracks = [];
  const bySeqDesc = [...readings].sort((a, b) => b.seq - a.seq);
  for (const r of bySeqDesc) {
    let home = tracks.find(t => t.readings.every(m => compatible(m, r, metric)));
    if (!home) { home = { readings: [], result: null, index: 0 }; tracks.push(home); }
    home.readings.push(r);
  }
  for (const t of tracks) t.readings.sort((a, b) => a.seq - b.seq);
  tracks.sort((a, b) => (b.readings.length - a.readings.length) ||
    (Math.max(...b.readings.map(r => r.seq)) - Math.max(...a.readings.map(r => r.seq))));
  tracks.forEach((t, i) => t.index = i + 1);
  return tracks;
}

/* ---------------------------------------------------------------------- */
/* Solver: bounding-box intersection, grid sample, pocket flood-fill.      */
/* Runs on a Web Worker at FULL precision (2,000,000 samples, matching the */
/* console app exactly) so the UI thread never blocks.                     */
/* ---------------------------------------------------------------------- */

const TARGET_SAMPLES = 2000000;

function solve(group, metric) {
  const result = { boxEmpty: false, bounded: false, count: 0, step: 0, volume: 0,
                    cx: 0, cy: 0, cz: 0, minX: 0, maxX: 0, minY: 0, maxY: 0, minZ: 0, maxZ: 0, blobs: [] };
  if (group.length === 0) return result;

  let minX = -Infinity, maxX = Infinity, minY = -Infinity, maxY = Infinity, minZ = -Infinity, maxZ = Infinity;
  for (const r of group) {
    minX = Math.max(minX, r.x - r.maxDist); maxX = Math.min(maxX, r.x + r.maxDist);
    minY = Math.max(minY, r.y - r.maxDist); maxY = Math.min(maxY, r.y + r.maxDist);
    minZ = Math.max(minZ, r.z - r.maxDist); maxZ = Math.min(maxZ, r.z + r.maxDist);
  }
  if (minX > maxX || minY > maxY || minZ > maxZ) { result.boxEmpty = true; return result; }
  if (!isFinite(minX) || !isFinite(maxX) || !isFinite(minY) || !isFinite(maxY) || !isFinite(minZ) || !isFinite(maxZ))
    return result; // unbounded - silent readings only rule points out

  result.bounded = true;
  const sizeX = maxX - minX, sizeY = maxY - minY, sizeZ = maxZ - minZ;
  const boxVolume = Math.max(1, sizeX) * Math.max(1, sizeY) * Math.max(1, sizeZ);
  const step = Math.max(1.0, Math.cbrt(boxVolume / TARGET_SAMPLES));
  result.step = step;

  const cellSize = Math.max(step * 3, 8.0);
  const cells = new Map();
  let count = 0, sumX = 0, sumY = 0, sumZ = 0;
  let loX = Infinity, hiX = -Infinity, loY = Infinity, hiY = -Infinity, loZ = Infinity, hiZ = -Infinity;

  for (let x = minX; x <= maxX; x += step) {
    for (let y = minY; y <= maxY; y += step) {
      for (let z = minZ; z <= maxZ; z += step) {
        let ok = true;
        for (const r of group) { if (!readingSatisfies(r, x, y, z, metric)) { ok = false; break; } }
        if (!ok) continue;

        count++; sumX += x; sumY += y; sumZ += z;
        if (x < loX) loX = x; if (x > hiX) hiX = x;
        if (y < loY) loY = y; if (y > hiY) hiY = y;
        if (z < loZ) loZ = z; if (z > hiZ) hiZ = z;

        const key = `${Math.floor(x / cellSize)},${Math.floor(y / cellSize)},${Math.floor(z / cellSize)}`;
        let cell = cells.get(key);
        if (!cell) { cell = { count: 0, sx: 0, sy: 0, sz: 0, minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity, minZ: Infinity, maxZ: -Infinity }; cells.set(key, cell); }
        cell.count++; cell.sx += x; cell.sy += y; cell.sz += z;
        if (x < cell.minX) cell.minX = x; if (x > cell.maxX) cell.maxX = x;
        if (y < cell.minY) cell.minY = y; if (y > cell.maxY) cell.maxY = y;
        if (z < cell.minZ) cell.minZ = z; if (z > cell.maxZ) cell.maxZ = z;
      }
    }
  }

  result.count = count;
  if (count === 0) return result;
  result.volume = count * step * step * step;
  result.cx = sumX / count; result.cy = sumY / count; result.cz = sumZ / count;
  result.minX = loX; result.maxX = hiX; result.minY = loY; result.maxY = hiY; result.minZ = loZ; result.maxZ = hiZ;
  result.blobs = findBlobs(cells);
  return result;
}

function findBlobs(cells) {
  const blobs = [];
  const seen = new Set();
  for (const startKey of cells.keys()) {
    if (seen.has(startKey)) continue;
    const members = [];
    const queue = [startKey];
    seen.add(startKey);
    while (queue.length) {
      const key = queue.pop();
      members.push(cells.get(key));
      const [cx, cy, cz] = key.split(",").map(Number);
      for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) {
        if (dx === 0 && dy === 0 && dz === 0) continue;
        const nKey = `${cx + dx},${cy + dy},${cz + dz}`;
        if (cells.has(nKey) && !seen.has(nKey)) { seen.add(nKey); queue.push(nKey); }
      }
    }
    const blob = { count: 0, cx: 0, cy: 0, cz: 0, minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity, minZ: Infinity, maxZ: -Infinity };
    let sx = 0, sy = 0, sz = 0;
    for (const c of members) {
      blob.count += c.count; sx += c.sx; sy += c.sy; sz += c.sz;
      blob.minX = Math.min(blob.minX, c.minX); blob.maxX = Math.max(blob.maxX, c.maxX);
      blob.minY = Math.min(blob.minY, c.minY); blob.maxY = Math.max(blob.maxY, c.maxY);
      blob.minZ = Math.min(blob.minZ, c.minZ); blob.maxZ = Math.max(blob.maxZ, c.maxZ);
    }
    blob.cx = sx / blob.count; blob.cy = sy / blob.count; blob.cz = sz / blob.count;
    blobs.push(blob);
  }
  blobs.sort((a, b) => b.count - a.count);
  return blobs;
}
function blobSeparation(a, b) { return Math.hypot(a.cx - b.cx, a.cy - b.cy, a.cz - b.cz); }

// Worker source is assembled from these same function bodies via toString(), so there is
// exactly one copy of the solving logic - the worker just runs it off the main thread.
// TARGET_SAMPLES must be spliced in explicitly: toString() only copies a function's own
// body, not the outer constant it closes over.
const SOLVER_WORKER_SOURCE = `
  const TARGET_SAMPLES = ${TARGET_SAMPLES};
  ${distanceTo.toString()}
  ${readingSatisfies.toString()}
  ${solve.toString()}
  ${findBlobs.toString()}
  self.onmessage = (e) => {
    const { id, group, metric } = e.data;
    try {
      self.postMessage({ id, result: solve(group, metric) });
    } catch (err) {
      self.postMessage({ id, error: String(err && err.stack || err) });
    }
  };
`;

const solverWorker = new Worker(URL.createObjectURL(new Blob([SOLVER_WORKER_SOURCE], { type: "application/javascript" })));
const pendingSolves = new Map();
let solveReqId = 0;
solverWorker.onmessage = e => {
  const { id, result, error } = e.data;
  const pending = pendingSolves.get(id);
  if (!pending) return;
  pendingSolves.delete(id);
  if (error) pending.reject(new Error(error)); else pending.resolve(result);
};
solverWorker.onerror = err => {
  for (const { reject } of pendingSolves.values()) reject(err);
  pendingSolves.clear();
};

function solveAsync(group, metric) {
  return new Promise((resolve, reject) => {
    const id = ++solveReqId;
    pendingSolves.set(id, { resolve, reject });
    solverWorker.postMessage({
      id, metric,
      group: group.map(r => ({ x: r.x, y: r.y, z: r.z, minDist: r.minDist, maxDist: r.maxDist })),
    });
  });
}

/* ---------------------------------------------------------------------- */
/* Formatting helpers                                                      */
/* ---------------------------------------------------------------------- */

function fmt(n, dp) { return Number(n).toFixed(dp); }
function fmtInt(n) { return Math.round(n).toLocaleString("en-US"); }
function pad(n, w) { return String(n).padStart(w, "0"); }
function fmtTimestampMs(d) {
  return `${d.getFullYear()}-${pad(d.getMonth()+1,2)}-${pad(d.getDate(),2)} ${pad(d.getHours(),2)}:${pad(d.getMinutes(),2)}:${pad(d.getSeconds(),2)}.${pad(d.getMilliseconds(),3)}`;
}
function fmtDisplayTime(d) { return `${pad(d.getHours(),2)}:${pad(d.getMinutes(),2)}:${pad(d.getSeconds(),2)}`; }
function fmtDisplayDateTime(d) { return `${d.getFullYear()}-${pad(d.getMonth()+1,2)}-${pad(d.getDate(),2)} ${fmtDisplayTime(d)}`; }
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function confidenceColorVar(c) { return c >= 0.85 ? "var(--good)" : c >= 0.5 ? "var(--warn)" : "var(--bad)"; }
function barHtml(frac, colorVar) {
  const pct = Math.max(0, Math.min(1, frac)) * 100;
  return `<span class="bar"><i style="width:${pct}%;background:${colorVar || "var(--accent)"}"></i></span>`;
}

/* ---------------------------------------------------------------------- */
/* Minecraft's F3+C copies a teleport command with the current position -  */
/* e.g. "/execute in minecraft:overworld run tp @s -2.51 -60.00 4.41       */
/* 897.60 90.00" (older versions: just "/tp @s x y z yaw pitch"). Pasting  */
/* that whole thing into any one X/Y/Z box fills all three, so you never   */
/* have to hand-type the number.                                           */
/* ---------------------------------------------------------------------- */

function parseF3CTeleport(text) {
  const m = text.match(/tp\s+@[sp]\s+(-?\d+\.?\d*)\s+(-?\d+\.?\d*)\s+(-?\d+\.?\d*)/i);
  if (!m) return null;
  return { x: parseFloat(m[1]), y: parseFloat(m[2]), z: parseFloat(m[3]) };
}

// Wires a paste handler onto each of a set of X/Y/Z inputs: if the pasted text is an
// F3+C teleport command, all three fields fill from it and the raw paste is suppressed
// (a number input would reject that text anyway); anything else pastes normally.
function wireF3CAutofill(xId, yId, zId) {
  const xEl = document.getElementById(xId), yEl = document.getElementById(yId), zEl = document.getElementById(zId);
  for (const el of [xEl, yEl, zEl]) {
    el.addEventListener("paste", e => {
      const text = (e.clipboardData || window.clipboardData).getData("text");
      const parsed = parseF3CTeleport(text);
      if (!parsed) return; // not an F3+C string - let the normal paste happen
      e.preventDefault();
      xEl.value = parsed.x; yEl.value = parsed.y; zEl.value = parsed.z;
    });
  }
}

/* ---------------------------------------------------------------------- */
/* Easter eggs. Standalone build only - not in the C#-hosted UI.           */
/*                                                                          */
/* Typing "bythebytes" into any X/Y/Z box (number inputs reject the letters, */
/* but the keystrokes still fire) toggles a deliberately painful purple/   */
/* black "missing texture" theme.                                          */
/*                                                                          */
/* Setting X=Y=Z=67 replaces every bit of visible text on the page with    */
/* alternating 6/7 digits, live, until the values stop being 67/67/67.     */
/* ---------------------------------------------------------------------- */

const EASTER_BUFFER_MAX = 20;
let easterKeyBuffer = "";

function wirebythebytesEgg(...ids) {
  for (const id of ids) {
    document.getElementById(id).addEventListener("keydown", e => {
      if (e.key.length !== 1) return;
      easterKeyBuffer = (easterKeyBuffer + e.key).slice(-EASTER_BUFFER_MAX);
      if (easterKeyBuffer.toLowerCase().includes("bythebytes")) {
        document.documentElement.classList.toggle("bythebytes-mode");
        easterKeyBuffer = "";
      }
    });
  }
}

let sixtySevenActive = false;
let sixtySevenObserver = null;
const sixtySevenOriginals = new Map();

function corruptTextNode(node) {
  if (!node.nodeValue || !node.nodeValue.trim()) return;
  const parent = node.parentElement;
  if (parent && parent.closest("script,style,input,select,option,textarea")) return;
  if (!sixtySevenOriginals.has(node)) sixtySevenOriginals.set(node, node.nodeValue);
  let out = "", flip = 0;
  for (const ch of node.nodeValue) {
    if (/\s/.test(ch)) { out += ch; continue; }
    out += (flip++ % 2 === 0) ? "6" : "7";
  }
  node.nodeValue = out;
}

function corruptTextIn(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walker.nextNode())) corruptTextNode(n);
}

function setSixtySeven(active) {
  if (active === sixtySevenActive) return;
  sixtySevenActive = active;
  if (active) {
    corruptTextIn(document.body);
    sixtySevenObserver = new MutationObserver(muts => {
      for (const m of muts) {
        m.addedNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) corruptTextNode(node);
          else if (node.nodeType === Node.ELEMENT_NODE) corruptTextIn(node);
        });
      }
    });
    sixtySevenObserver.observe(document.body, { childList: true, subtree: true });
  } else {
    if (sixtySevenObserver) { sixtySevenObserver.disconnect(); sixtySevenObserver = null; }
    for (const [node, original] of sixtySevenOriginals) node.nodeValue = original;
    sixtySevenOriginals.clear();
  }
}

function wireSixtySevenEgg(xId, yId, zId) {
  const xEl = document.getElementById(xId), yEl = document.getElementById(yId), zEl = document.getElementById(zId);
  const check = () => setSixtySeven(xEl.value === "67" && yEl.value === "67" && zEl.value === "67");
  for (const el of [xEl, yEl, zEl]) el.addEventListener("input", check);
}

/* App state                                                               */

const state = {
  readings: [], kills: [], sessions: [], currentSession: null,
  seeker: SEEKERS.repaired, metric: "Euclidean",
  nextSeq: 1, nextKillId: 1, replaying: false,
  soloVolumeCache: new Map(),
  clockOverride: null,
  selectedSessionIdx: null,
};

function clockNow() { return state.clockOverride ?? new Date(); }
function activeReadings() { return state.readings.filter(r => !r.retired); }

function recordActivity(rawInput, outcome) {
  state.currentSession.entries.push({ timestamp: clockNow(), rawInput, outcome });
}

/* Dispatch - every action (button, advanced box, or replay) goes through  */
/* this one function, so there is exactly one implementation of behavior. */

async function dispatch(line) {
  const outcome = await dispatchCore(line);
  if (!state.replaying) recordActivity(line, outcome);
  return outcome;
}

async function dispatchCore(line) {
  const tokens = line.trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return "no-op";
  const head = tokens[0].toLowerCase();

  if (tokens.length === 4 && tokens[3].toLowerCase() === "found") return await handleFound(tokens[0], tokens[1], tokens[2]);

  switch (head) {
    case "seeker": case "seek": case "ghost": case "ghostseeker": case "tier": case "relic":
      return tokens.length > 1 ? changeSeeker(tokens.slice(1).join(" ")) : "seeker table shown";
    case "metric":
      return tokens.length > 1 ? changeMetric(tokens[1]) : "metric status shown";
    case "reset":
      return doReset();
    case "found":
      if (tokens.length === 4) return await handleFound(tokens[1], tokens[2], tokens[3]);
      if (tokens.length === 1) return clearEverythingAsFound();
      return "rejected: bad 'found' usage";
    case "delete": case "remove":
      return tokens.length === 2 ? deleteReading(tokens[1]) : "rejected: bad delete usage";
    case "starttimer": case "timerstart":
      if (state.replaying) return "starttimer (skipped during replay)";
      return timerStart(tokens.length > 1 ? Number(tokens[1]) : null);
    case "ping": case "heard":
      if (state.replaying) return "ping (skipped during replay)";
      return timerPing();
    case "stoptimer": case "timerstop":
      if (state.replaying) return "stoptimer (skipped during replay)";
      return timerStop();
    case "list": case "conflicts": case "estimate": case "tracks": case "history":
    case "bands": case "timer": case "sessions": case "help":
      return `${head} shown`;
    case "output": case "export": case "save":
      return "rejected: use the Save Session Log button";
    case "import": case "load":
      return "rejected: use the Load Session Log file picker";
    case "simulate":
      return "rejected: use the Simulate buttons";
    case "exit": case "quit":
      return "no-op (nothing to exit in a browser)";
  }

  if (tokens.length === 5) return tryAddReading(tokens); // 5th token silently ignored - no abyss-coords calibration in this build
  if (tokens.length === 4) return tryAddReading(tokens);
  return "rejected: unrecognized command";
}

/* Actions                                                                 */

function changeSeeker(spec) {
  const parsed = seekerParse(spec);
  if (!parsed) return `rejected: unrecognized seeker '${spec}'`;
  state.seeker = parsed;
  return `seeker set to ${parsed.label}`;
}

function changeMetric(word) {
  const w = word.toLowerCase();
  if (w.startsWith("cheb")) { state.metric = "Chebyshev"; }
  else if (w.startsWith("euc")) { state.metric = "Euclidean"; }
  else return "rejected: unknown metric";
  state.soloVolumeCache.clear();
  return `metric set to ${state.metric}`;
}

function tryAddReading(tokens) {
  const x = Number(tokens[0]), y = Number(tokens[1]), z = Number(tokens[2]);
  if (!isFinite(x) || !isFinite(y) || !isFinite(z)) return "rejected: bad coordinates";
  const band = resolveBand(state.seeker, tokens[3]);
  if (!band) return `rejected: '${tokens[3]}' is not a valid band on ${state.seeker.label}`;
  const reading = {
    seq: state.nextSeq++, x, y, z, minDist: band.min, maxDist: band.max, letter: band.letter,
    seekerName: state.seeker.name, timestamp: clockNow(), retired: false, retiredByKillId: null,
  };
  state.readings.push(reading);
  return `reading #${reading.seq} added`;
}

function deleteReading(idStr) {
  const id = Number(idStr);
  const target = state.readings.find(r => r.seq === id);
  if (!target) return `rejected: no reading #${id}`;
  if (target.retired) return `rejected: #${id} already retired`;
  state.readings = state.readings.filter(r => r !== target);
  return `reading #${id} deleted`;
}

async function handleFound(sx, sy, sz) {
  const fx = Number(sx), fy = Number(sy), fz = Number(sz);
  if (!isFinite(fx) || !isFinite(fy) || !isFinite(fz)) return "rejected: bad coordinates for 'found'";

  const active = activeReadings();
  const tracks = buildTracks(active, state.metric);
  const matched = active.filter(r => readingSatisfies(r, fx, fy, fz, state.metric));

  if (matched.length === 0) {
    const miss = { id: state.nextKillId++, x: fx, y: fy, z: fz, timestamp: clockNow(), retiredSeqs: [], trackIndex: null, estimateError: null };
    state.kills.push(miss);
    return `kill #${miss.id} confirmed at (${fmt(fx,1)},${fmt(fy,1)},${fmt(fz,1)}), no reading matched, nothing retired`;
  }

  const owner = [...tracks].sort((a, b) => b.readings.filter(r => matched.includes(r)).length - a.readings.filter(r => matched.includes(r)).length)[0];
  owner.result = await solveAsync(owner.readings, state.metric);
  let err = null;
  if (owner.result.bounded && owner.result.count > 0)
    err = Math.hypot(fx - owner.result.cx, fy - owner.result.cy, fz - owner.result.cz);

  const kill = { id: state.nextKillId++, x: fx, y: fy, z: fz, timestamp: clockNow(),
                 retiredSeqs: matched.map(r => r.seq), trackIndex: owner.index, estimateError: err };
  state.kills.push(kill);
  for (const r of matched) { r.retired = true; r.retiredByKillId = kill.id; }

  return `kill #${kill.id} confirmed at (${fmt(fx,1)},${fmt(fy,1)},${fmt(fz,1)}), retired ${kill.retiredSeqs.map(s => "#" + s).join(" ")}`;
}

function clearEverythingAsFound() {
  const active = activeReadings();
  const kill = { id: state.nextKillId++, x: null, y: null, z: null, timestamp: clockNow(),
                 retiredSeqs: active.map(r => r.seq), trackIndex: null, estimateError: null };
  state.kills.push(kill);
  for (const r of active) { r.retired = true; r.retiredByKillId = kill.id; }
  return `kill #${kill.id} confirmed at unspecified location, retired ${active.length} reading(s): ${kill.retiredSeqs.map(s => "#" + s).join(" ")}`;
}

function doReset() {
  state.readings = []; state.kills = []; state.soloVolumeCache.clear();
  state.nextSeq = 1; state.nextKillId = 1;
  return "board reset (readings and history cleared)";
}

function resetBoardForSimulation() {
  state.readings = []; state.kills = []; state.soloVolumeCache.clear();
  state.nextSeq = 1; state.nextKillId = 1;
  state.seeker = SEEKERS.repaired; state.metric = "Euclidean";
}

async function baselineFor(track) {
  for (const r of track.readings) {
    if (isSilentReading(r)) continue;
    if (!state.soloVolumeCache.has(r.seq)) {
      const solo = await solveAsync([r], state.metric);
      state.soloVolumeCache.set(r.seq, solo.bounded ? solo.volume : 0);
    }
    const v = state.soloVolumeCache.get(r.seq);
    if (v > 0) return v;
  }
  return 0;
}

/* Session log: export / import / simulate. Format matches the console     */
/* app's own exactly (Format-Version 1, tab-separated), so a file saved    */
/* from either side loads and replays on the other.                        */

const FORMAT_VERSION = 1;

function sanitizeField(s) { return String(s).replace(/\t/g, " ").replace(/\r/g, " ").replace(/\n/g, " "); }
function formatDuration(ms) {
  const totalSec = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(totalSec / 3600), m = Math.floor((totalSec % 3600) / 60), s = totalSec % 60;
  return `${pad(h,2)}:${pad(m,2)}:${pad(s,2)}`;
}
function sessionDurationMs(s) {
  if (s.entries.length === 0) return 0;
  return s.entries[s.entries.length - 1].timestamp - s.startedAt;
}

function buildLog(sessions) {
  const ordered = [...sessions].sort((a, b) => a.startedAt - b.startedAt);
  const totalCommands = ordered.reduce((n, s) => n + s.entries.length, 0);
  let out = "";
  out += "=== Ghost Seek Locator session log ===\n";
  out += `Format-Version ${FORMAT_VERSION}\n`;
  out += `Generated       ${fmtDisplayDateTime(new Date())}\n`;
  out += `Sessions        ${ordered.length}\n`;
  out += `Commands        ${totalCommands}\n\n`;
  ordered.forEach((s, i) => { out += buildSessionBlock(s, i + 1); });
  return out;
}
function buildSessionBlock(s, index) {
  let out = "";
  out += `--- Session ${index} ---\n`;
  out += `Started   ${fmtTimestampMs(s.startedAt)}\n`;
  out += `Duration  ${formatDuration(sessionDurationMs(s))}\n`;
  out += `Commands  ${s.entries.length}\n`;
  for (const e of s.entries) out += `${fmtTimestampMs(e.timestamp)}\t${sanitizeField(e.rawInput)}\t${sanitizeField(e.outcome)}\n`;
  out += `--- end session ${index} ---\n\n`;
  return out;
}

function parseTimestamp(str) {
  const m = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})\.(\d{3})$/.exec(str.trim());
  if (!m) return null;
  const [, y, mo, d, h, mi, se, ms] = m.map(Number);
  const dt = new Date(y, mo - 1, d, h, mi, se, ms);
  return isNaN(dt.getTime()) ? null : dt;
}

function importLog(text) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  let formatVersion = -1;
  for (let i = 0; i < lines.length && i < 10; i++) {
    if (lines[i].startsWith("Format-Version")) {
      const parts = lines[i].trim().split(/\s+/);
      formatVersion = parseInt(parts[1], 10);
      break;
    }
  }
  if (!(formatVersion >= 0)) return { ok: false, error: "No 'Format-Version' header found - this doesn't look like a Locator session log." };
  if (formatVersion > FORMAT_VERSION) return { ok: false, error: `This file is format version ${formatVersion}, but this page only understands up to version ${FORMAT_VERSION}.` };

  const sessions = [];
  let current = null, inBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^--- Session \d+ ---\s*$/.test(line)) {
      if (inBlock) return { ok: false, error: `line ${i + 1}: a new session block started before the previous one ended.` };
      current = { startedAt: null, entries: [], imported: true };
      inBlock = true; continue;
    }
    if (line.startsWith("--- end session")) {
      if (!inBlock || !current) return { ok: false, error: `line ${i + 1}: 'end session' with no session block open.` };
      sessions.push(current); current = null; inBlock = false; continue;
    }
    if (!inBlock) continue;

    if (line.startsWith("Started")) {
      const parts = line.trim().split(/\s+/);
      const ts = parseTimestamp(`${parts[1]} ${parts[2]}`);
      if (!ts) return { ok: false, error: `line ${i + 1}: couldn't read the session's Started timestamp.` };
      current.startedAt = ts; continue;
    }
    if (line.startsWith("Duration") || line.startsWith("Commands")) continue;
    if (line.trim().length === 0) continue;

    const fields = line.split("\t");
    if (fields.length !== 3) return { ok: false, error: `line ${i + 1}: expected 3 tab-separated fields, found ${fields.length}.` };
    const ts = parseTimestamp(fields[0]);
    if (!ts) return { ok: false, error: `line ${i + 1}: couldn't read the entry's timestamp '${fields[0]}'.` };
    current.entries.push({ timestamp: ts, rawInput: fields[1], outcome: fields[2] });
  }

  if (inBlock) return { ok: false, error: "The file ends mid-session - the last session block was never closed." };
  if (sessions.length === 0) return { ok: false, error: "No session blocks found in this file." };
  return { ok: true, sessions };
}

async function simulateSessions(list) {
  if (state.replaying) return "rejected: already simulating";
  if (list.length === 0) return "rejected: nothing to simulate";
  resetBoardForSimulation();
  state.replaying = true;
  try {
    for (const s of list) for (const e of s.entries) {
      state.clockOverride = e.timestamp;
      try { await dispatch(e.rawInput); } finally { state.clockOverride = null; }
    }
  } finally { state.replaying = false; }
  return `simulated ${list.length} session(s)`;
}

/* Sound timer loop - same rollover/calibration math as the console app,   */
/* shown as a countdown bar instead of a console-cursor overlay.           */

const timer = {
  running: false, interval: 20, anchor: null, lastPing: null, startedAt: null,
  loops: 0, loopsAtLastPing: 0, gaps: [], tickHandle: null,
};
const TIMER_CALIB_WINDOW = 6, TIMER_MIN_GAP = 1.0, TIMER_CALIB_LOW = 0.4, TIMER_CALIB_HIGH = 2.5;

function timerRoll(now) {
  if (timer.interval <= 0) return;
  const elapsed = (now - timer.anchor) / 1000;
  if (elapsed < timer.interval) return;
  const whole = Math.floor(elapsed / timer.interval);
  timer.loops += whole;
  timer.anchor = new Date(timer.anchor.getTime() + whole * timer.interval * 1000);
}

function timerStart(explicitInterval) {
  if (explicitInterval != null) {
    if (!isFinite(explicitInterval) || explicitInterval < 1 || explicitInterval > 120) return "rejected: interval out of range";
    timer.interval = explicitInterval; timer.gaps = [];
  }
  const now = clockNow();
  timer.anchor = now; timer.lastPing = now; timer.startedAt = now;
  timer.loops = 0; timer.loopsAtLastPing = 0; timer.running = true;
  ensureTimerTick();
  return "timer started";
}

function timerPing() {
  const now = clockNow();
  if (!timer.running) {
    timer.anchor = now; timer.lastPing = now; timer.startedAt = now;
    timer.loops = 0; timer.loopsAtLastPing = 0; timer.running = true;
    ensureTimerTick();
    return `Loop started from this ping. Interval ${fmt(timer.interval,1)}s until calibrated.`;
  }
  timerRoll(now);
  const sinceAnchor = (now - timer.anchor) / 1000;
  if (sinceAnchor > timer.interval * 0.15) timer.loops++;
  timer.anchor = now;

  const gap = (now - timer.lastPing) / 1000;
  timer.lastPing = now;
  const skipped = timer.loops - timer.loopsAtLastPing;
  timer.loopsAtLastPing = timer.loops;

  if (gap < TIMER_MIN_GAP) return `Ping - loop ${timer.loops}. Only ${fmt(gap,1)}s after the last one, ignored for calibration.`;
  const cycles = Math.max(1, Math.round(gap / timer.interval));
  const perCycle = gap / cycles;
  if (perCycle < timer.interval * TIMER_CALIB_LOW || perCycle > timer.interval * TIMER_CALIB_HIGH)
    return `Ping - loop ${timer.loops}. ${fmt(perCycle,1)}s per cycle is too far from ${fmt(timer.interval,1)}s to trust, interval unchanged.`;

  timer.gaps.push(perCycle);
  if (timer.gaps.length > TIMER_CALIB_WINDOW) timer.gaps.shift();
  const sorted = [...timer.gaps].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  timer.interval = sorted.length % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

  const span = cycles > 1 ? ` (${fmt(gap,1)}s over ${cycles} cycles)` : "";
  const missed = skipped > 1 ? `, ${skipped - 1} sound(s) went by unconfirmed` : "";
  return `Ping - loop ${timer.loops}. Interval now ${fmt(timer.interval,1)}s${span}, median of ${timer.gaps.length}${missed}.`;
}

function timerStop() {
  if (!timer.running) return "rejected: timer not running";
  timerRoll(clockNow());
  const done = timer.loops, elapsedMs = clockNow() - timer.startedAt, perLoop = timer.interval;
  timer.running = false;
  return `timer stopped after ${done} loop(s) over ${formatDuration(elapsedMs)} at ${fmt(perLoop,1)}s per loop`;
}

function ensureTimerTick() {
  if (timer.tickHandle) return;
  timer.tickHandle = setInterval(() => { if (timer.running) { timerRoll(clockNow()); renderTimer(); } }, 200);
}

/* Rendering                                                               */

async function renderAll() {
  renderSeekerUI(); renderActiveTable(); renderConflicts();
  renderHistory(); renderSessions(); renderTimer();
  await renderResults();
}

function renderSeekerUI() {
  document.getElementById("seekerSelect").value = state.seeker.grade === "III" ? "giii" : state.seeker.grade === "II" ? "gii" : "gi";
  document.getElementById("metricSelect").value = state.metric === "Chebyshev" ? "chebyshev" : "euclidean";
  document.getElementById("bandTable").innerHTML = state.seeker.bands.map(b =>
    `<span class="band-chip"><strong>${b.letter}</strong> &nbsp;${bandRangeText(b)}</span>`).join("");
  const bandSelect = document.getElementById("rband");
  bandSelect.innerHTML = state.seeker.bands.map(b =>
    `<option value="${b.letter}">${b.letter} - ${bandRangeText(b)}</option>`).join("");
}

let resultsRequestToken = 0;
async function renderResults() {
  const active = activeReadings();
  const hint = document.getElementById("resultsHint");
  const body = document.getElementById("resultsBody");
  if (active.length === 0) {
    hint.textContent = "";
    body.innerHTML = `<p class="empty">No active readings yet. Add one above.</p>`;
    return;
  }
  const requestToken = ++resultsRequestToken;
  body.innerHTML = `<p class="empty">Solving...</p>`;

  const tracks = buildTracks(active, state.metric);
  for (const t of tracks) t.result = await solveAsync(t.readings, state.metric);
  if (requestToken !== resultsRequestToken) return;

  const conf = computeConfidence(active, state.metric);
  hint.textContent = `${active.length} reading(s) - ${state.seeker.label} - ${state.metric}`;

  let html = "";
  if (tracks.length > 1) {
    html += `<div class="msg warn">Your readings split into ${tracks.length} groups that can't all describe one skeleton.
      Most likely you've picked up two separate spawns - each group is solved on its own below.</div>`;
  }
  for (const t of tracks) html += await renderTrackCard(t, tracks.length, conf);
  if (requestToken !== resultsRequestToken) return;
  body.innerHTML = html;
}

async function renderTrackCard(t, trackCount, conf) {
  const r = t.result;
  const avgConf = t.readings.reduce((s, x) => s + conf.get(x.seq), 0) / t.readings.length;
  const title = trackCount > 1 ? `Track ${t.index}` : "Solution";
  const idList = t.readings.map(r => "#" + r.seq).join(" ");
  let html = `<div class="track-card${trackCount > 1 ? " warn" : ""}">`;
  html += `<div class="track-title">${title} - ${t.readings.length} reading(s): ${idList}</div>`;
  html += `<div class="kv"><div class="k">Confidence</div><div>${barHtml(avgConf, confidenceColorVar(avgConf))}<span class="pct">${Math.round(avgConf*100)}%</span></div></div>`;

  if (r.boxEmpty) {
    html += `<div class="msg bad">These readings are contradictory - no location satisfies all of them. Use Delete to drop whichever one was wrong.</div>`;
  } else if (!r.bounded) {
    html += `<div class="msg warn">Not enough info to bound a search area - silent readings only rule points out.</div>`;
  } else if (r.count === 0) {
    html += `<div class="msg warn">No sampled point satisfied every reading at this resolution. Add another reading to shrink the box.</div>`;
  } else {
    html += `<div class="kv" style="margin-top:8px;">
      <div class="k">Estimate</div><div class="mono">(${fmt(r.cx,1)}, ${fmt(r.cy,1)}, ${fmt(r.cz,1)})</div>
      <div class="k">Region</div><div class="mono">X[${fmt(r.minX,1)}, ${fmt(r.maxX,1)}] Y[${fmt(r.minY,1)}, ${fmt(r.maxY,1)}] Z[${fmt(r.minZ,1)}, ${fmt(r.maxZ,1)}]</div>`;
    const baseline = await baselineFor(t);
    if (baseline > 0) {
      const frac = r.volume / baseline;
      html += `<div class="k">Search space</div><div>${barHtml(Math.min(1,frac))}<span class="pct">${fmt(frac*100,2)}% of reading #${t.readings[0].seq} alone</span></div>`;
    }
    html += `<div class="k">Volume</div><div class="mono">~${fmtInt(r.volume)} blocks&sup3; (${fmtInt(r.count)} candidates @ step ${fmt(r.step,2)})</div></div>`;

    if (r.blobs.length > 1) {
      const gap = blobSeparation(r.blobs[0], r.blobs[1]);
      html += `<div class="msg warn">Valid area splits into ${r.blobs.length} separated pockets, ${fmt(gap,0)} blocks apart at the widest. Could be two skeletons, or just not enough readings yet.</div>`;
      r.blobs.forEach((b, i) => {
        const share = (b.count / r.count * 100);
        html += `<div class="pocket">pocket ${i+1}: (${fmt(b.cx,1)}, ${fmt(b.cy,1)}, ${fmt(b.cz,1)}) - ${fmt(share,1)}% of candidates</div>`;
      });
    }
  }
  html += `</div>`;
  return html;
}

function renderActiveTable() {
  const active = activeReadings();
  const wrap = document.getElementById("activeTableWrap");
  if (active.length === 0) { wrap.innerHTML = `<p class="empty">Nothing yet.</p>`; return; }
  const tracks = buildTracks(active, state.metric);
  const trackOf = new Map();
  for (const t of tracks) for (const r of t.readings) trackOf.set(r.seq, t.index);
  const conf = computeConfidence(active, state.metric);

  let html = `<table><thead><tr><th>#</th><th>Time</th><th>Position</th><th>Band</th><th>Range</th><th>Track</th><th>Confidence</th><th></th></tr></thead><tbody>`;
  for (const r of [...active].sort((a, b) => a.seq - b.seq)) {
    const c = conf.get(r.seq);
    html += `<tr>
      <td class="mono">#${r.seq}</td>
      <td class="mono">${fmtDisplayTime(r.timestamp)}</td>
      <td class="mono">${posText(r)}</td>
      <td class="mono">${r.letter}</td>
      <td class="mono">${bandText(r)}</td>
      <td class="mono">${trackOf.get(r.seq)}</td>
      <td>${barHtml(c, confidenceColorVar(c))}<span class="pct">${Math.round(c*100)}%</span></td>
      <td><button class="secondary" data-del="${r.seq}" style="padding:4px 8px;font-size:12px;">Delete</button></td>
    </tr>`;
  }
  html += `</tbody></table>`;
  wrap.innerHTML = html;
  wrap.querySelectorAll("[data-del]").forEach(btn => btn.addEventListener("click", () => withBusy(async () => {
    await dispatch(`delete ${btn.getAttribute("data-del")}`);
    await renderAll();
  })));
}

function renderConflicts() {
  const active = activeReadings();
  const body = document.getElementById("conflictsBody");
  if (active.length < 2) { body.innerHTML = `<p class="empty">Need at least two active readings.</p>`; return; }
  const pairs = findConflicts(active, state.metric);
  if (pairs.length === 0) { body.innerHTML = `<div class="msg good">No conflicts - every active reading agrees with every other.</div>`; return; }
  let html = `<div class="msg warn">${pairs.length} conflicting pair(s):</div>`;
  for (const [a, b] of pairs) {
    const d = distanceTo(a, b.x, b.y, b.z, state.metric);
    html += `<div style="font-size:13px;margin-top:4px;" class="mono">#${a.seq} ${a.letter} (${bandText(a)}) vs #${b.seq} ${b.letter} (${bandText(b)}) - ${fmt(d,1)} blocks apart</div>`;
  }
  body.innerHTML = html;
}

function renderHistory() {
  const body = document.getElementById("historyBody");
  if (state.kills.length === 0) { body.innerHTML = `<p class="empty">No kills yet.</p>`; return; }
  const retiredCount = state.readings.filter(r => r.retired).length;
  let html = "";
  for (const k of state.kills) {
    const pos = k.x == null ? "(unspecified)" : `(${fmt(k.x,1)}, ${fmt(k.y,1)}, ${fmt(k.z,1)})`;
    html += `<div class="kill"><strong>Kill #${k.id}</strong> found ${pos} <span class="mono" style="color:var(--muted)">${fmtDisplayDateTime(k.timestamp)}</span><br>`;
    if (k.retiredSeqs.length === 0) html += `retired: none (no reading matched)`;
    else {
      const errText = k.estimateError != null ? `, estimate was off by ${fmt(k.estimateError,1)} blocks` : "";
      const trackText = k.trackIndex != null ? ` (track ${k.trackIndex})` : "";
      html += `retired: ${k.retiredSeqs.map(s => "#" + s).join(" ")}${trackText}${errText}`;
    }
    html += `</div>`;
  }
  html += `<p class="hint" style="margin-top:8px;">${retiredCount} retired reading(s) total, ${activeReadings().length} still active.</p>`;
  body.innerHTML = html;
}

function renderSessions() {
  const list = document.getElementById("sessionsList");
  const ordered = [...state.sessions].sort((a, b) => a.startedAt - b.startedAt);
  if (ordered.length === 0) { list.innerHTML = `<p class="empty" style="padding:8px;">No sessions.</p>`; return; }
  list.innerHTML = ordered.map((s, i) => {
    const tag = s === state.currentSession ? "live" : (s.imported ? "imported" : "");
    const selected = state.selectedSessionIdx === i ? " selected" : "";
    return `<div class="session-row${selected}" data-idx="${i}">
      <span>[${i+1}] ${fmtDisplayDateTime(s.startedAt)} - ${s.entries.length} command(s)</span>
      <span class="tag">${tag}</span></div>`;
  }).join("");
  list.querySelectorAll("[data-idx]").forEach(row => row.addEventListener("click", () => {
    state.selectedSessionIdx = Number(row.getAttribute("data-idx"));
    renderSessions();
  }));
}

function renderTimer() {
  const status = document.getElementById("timerStatus");
  const fill = document.getElementById("timerBarFill");
  if (!timer.running) { status.textContent = "Not running."; fill.style.width = "0%"; return; }
  const now = clockNow();
  const remaining = timer.interval - (now - timer.anchor) / 1000;
  const frac = timer.interval <= 0 ? 0 : Math.min(1, Math.max(0, 1 - remaining / timer.interval));
  fill.style.width = `${frac * 100}%`;
  const calib = timer.gaps.length === 0 ? "uncalibrated (default)" : `calibrated from ${timer.gaps.length} ping(s)`;
  status.textContent = `Loop ${timer.loops + 1}, next sound in ${fmt(Math.max(0,remaining),1)}s. Interval ${fmt(timer.interval,1)}s, ${calib}.`;
}

function flashMsg(elId, text, kind) {
  const el = document.getElementById(elId);
  el.innerHTML = `<div class="msg ${kind}">${escapeHtml(text)}</div>`;
}

/* ---------------------------------------------------------------------- */
/* Wiring                                                                  */
/* ---------------------------------------------------------------------- */

const BUSY_BUTTON_IDS = ["addReadingBtn", "confirmFoundBtn", "bareFoundBtn", "resetBtn",
  "simulateSelectedBtn", "simulateAllBtn", "seekerSelect", "metricSelect", "cmdRunBtn"];
async function withBusy(fn) {
  const els = BUSY_BUTTON_IDS.map(id => document.getElementById(id));
  els.forEach(el => el.disabled = true);
  try { await fn(); } finally { els.forEach(el => el.disabled = false); }
}

function init() {
  state.currentSession = { startedAt: clockNow(), entries: [], imported: false };
  state.sessions.push(state.currentSession);

  wireF3CAutofill("rx", "ry", "rz");
  wireF3CAutofill("fx", "fy", "fz");

  wirebythebytesEgg("rx", "ry", "rz", "fx", "fy", "fz");
  wireSixtySevenEgg("rx", "ry", "rz");

  document.getElementById("seekerSelect").addEventListener("change", e => withBusy(async () => {
    await dispatch(`seeker ${e.target.value}`); await renderAll();
  }));
  document.getElementById("metricSelect").addEventListener("change", e => withBusy(async () => {
    await dispatch(`metric ${e.target.value}`); await renderAll();
  }));

  document.getElementById("addReadingBtn").addEventListener("click", () => withBusy(async () => {
    const x = document.getElementById("rx").value, y = document.getElementById("ry").value,
          z = document.getElementById("rz").value, band = document.getElementById("rband").value;
    if (x === "" || y === "" || z === "") { flashMsg("addReadingMsg", "Enter X, Y and Z.", "warn"); return; }
    const outcome = await dispatch(`${x} ${y} ${z} ${band}`);
    const ok = outcome.startsWith("reading");
    flashMsg("addReadingMsg", outcome, ok ? "good" : "warn");
    if (ok) { document.getElementById("rx").value = ""; document.getElementById("ry").value = ""; document.getElementById("rz").value = ""; }
    await renderAll();
    if (ok) document.getElementById("rx").focus();
  }));
  document.getElementById("addReadingRow").addEventListener("keydown", e => {
    if (e.key === "Enter") document.getElementById("addReadingBtn").click();
  });

  document.getElementById("confirmFoundBtn").addEventListener("click", () => withBusy(async () => {
    const x = document.getElementById("fx").value, y = document.getElementById("fy").value, z = document.getElementById("fz").value;
    if (x === "" || y === "" || z === "") { flashMsg("foundMsg", "Enter X, Y and Z.", "warn"); return; }
    const outcome = await dispatch(`found ${x} ${y} ${z}`);
    flashMsg("foundMsg", outcome, outcome.includes("no reading matched") ? "warn" : "good");
    await renderAll();
  }));
  document.getElementById("bareFoundBtn").addEventListener("click", () => withBusy(async () => {
    const outcome = await dispatch("found");
    flashMsg("foundMsg", outcome, "good");
    await renderAll();
  }));

  document.getElementById("resetBtn").addEventListener("click", () => withBusy(async () => {
    if (!confirm("Wipe every reading and all kill history? This can't be undone.")) return;
    await dispatch("reset"); await renderAll();
  }));

  document.getElementById("saveLogBtn").addEventListener("click", async () => {
    const text = buildLog(state.sessions);
    await dispatch("output");
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    const now = new Date();
    a.href = URL.createObjectURL(blob);
    a.download = `locator-${now.getFullYear()}${pad(now.getMonth()+1,2)}${pad(now.getDate(),2)}-${pad(now.getHours(),2)}${pad(now.getMinutes(),2)}${pad(now.getSeconds(),2)}.txt`;
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(a.href);
    renderSessions();
  });

  document.getElementById("loadLogFile").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      const result = importLog(reader.result);
      const out = document.getElementById("logOut");
      out.style.display = "block";
      if (!result.ok) { out.textContent = `Couldn't read that as a Locator session log: ${result.error}`; return; }
      state.sessions.push(...result.sessions);
      out.textContent = `Imported ${result.sessions.length} session(s), ${result.sessions.reduce((n,s)=>n+s.entries.length,0)} command(s) total.`;
      renderSessions();
    };
    reader.readAsText(file);
    e.target.value = "";
  });

  document.getElementById("simulateSelectedBtn").addEventListener("click", () => withBusy(async () => {
    const ordered = [...state.sessions].sort((a, b) => a.startedAt - b.startedAt);
    if (state.selectedSessionIdx == null || !ordered[state.selectedSessionIdx]) {
      document.getElementById("logOut").style.display = "block";
      document.getElementById("logOut").textContent = "Pick a session from the list first.";
      return;
    }
    await runSimulation([ordered[state.selectedSessionIdx]]);
  }));
  document.getElementById("simulateAllBtn").addEventListener("click", () => withBusy(async () => {
    const imported = state.sessions.filter(s => s.imported).sort((a, b) => a.startedAt - b.startedAt);
    if (imported.length === 0) {
      document.getElementById("logOut").style.display = "block";
      document.getElementById("logOut").textContent = "No imported sessions to simulate - load a file first.";
      return;
    }
    await runSimulation(imported);
  }));

  document.getElementById("startTimerBtn").addEventListener("click", () => {
    const secs = Number(document.getElementById("timerSecs").value) || 20;
    dispatch(`starttimer ${secs}`);
  });
  document.getElementById("pingBtn").addEventListener("click", () => dispatch("ping"));
  document.getElementById("stopTimerBtn").addEventListener("click", () => dispatch("stoptimer"));

  const runCmd = () => withBusy(async () => {
    const input = document.getElementById("cmdInput");
    const line = input.value.trim();
    if (!line) return;
    const outcome = await dispatch(line);
    const out = document.getElementById("cmdOut");
    out.style.display = "block";
    out.textContent = `> ${line}\n${outcome}`;
    input.value = "";
    await renderAll();
    input.focus();
  });
  document.getElementById("cmdRunBtn").addEventListener("click", runCmd);
  document.getElementById("cmdInput").addEventListener("keydown", e => { if (e.key === "Enter") runCmd(); });

  renderAll();
}

async function runSimulation(sessionList) {
  const outcome = await simulateSessions(sessionList);
  const out = document.getElementById("logOut");
  out.style.display = "block";
  out.textContent = `${outcome}. ${activeReadings().length} active reading(s), ${state.kills.length} kill(s).`;
  state.selectedSessionIdx = null;
  await renderAll();
}

document.addEventListener("DOMContentLoaded", init);