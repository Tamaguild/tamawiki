//Word bank here 
const BANKS = {
  "MIA_WORDS": ["SKELLY","RELIC","REG","DUMTICK","RIKO","WHISTLE","PLUH","ONITSUCHI","PICKAXE","LAYER","GOBLETS","FAULT","FOREST","TAMA","ABYSS"]
};
//Settings: Bank to pull from; Number of words to hide; grid dimensions
const CATEGORY = "MIA_WORDS";
const WORD_COUNT = 8;
const GRID_SIZE = 10;

const DIRS = [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]];

const gridEl = document.getElementById('grid');
const wordListEl = document.getElementById('wordList');
const statusEl = document.getElementById('status');
const winEl = document.getElementById('win');

let grid, placed, cells, foundSet, dragging=false, dragCells=[], startCell=null;

function buildGrid(words){
  grid = Array.from({length:GRID_SIZE}, ()=>Array(GRID_SIZE).fill(null));
  placed = [];
  const shuffled = [...words].sort(()=>Math.random()-0.5);
  for(const w of shuffled){
    let ok=false;
    for(let attempt=0; attempt<60 && !ok; attempt++){
      const dir = DIRS[Math.floor(Math.random()*DIRS.length)];
      const r0 = Math.floor(Math.random()*GRID_SIZE);
      const c0 = Math.floor(Math.random()*GRID_SIZE);
      const r1 = r0 + dir[0]*(w.length-1);
      const c1 = c0 + dir[1]*(w.length-1);
      if(r1<0||r1>=GRID_SIZE||c1<0||c1>=GRID_SIZE) continue;
      let fits=true;
      for(let i=0;i<w.length;i++){
        const r=r0+dir[0]*i, c=c0+dir[1]*i;
        const existing = grid[r][c];
        if(existing && existing!==w[i]){fits=false;break;}
      }
      if(!fits) continue;
      for(let i=0;i<w.length;i++){
        const r=r0+dir[0]*i, c=c0+dir[1]*i;
        grid[r][c]=w[i];
      }
      placed.push({word:w, cells:Array.from({length:w.length},(_,i)=>[r0+dir[0]*i, c0+dir[1]*i])});
      ok=true;
    }
  }
  const ABC='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(let r=0;r<GRID_SIZE;r++) for(let c=0;c<GRID_SIZE;c++)
    if(!grid[r][c]) grid[r][c]=ABC[Math.floor(Math.random()*26)];
}

function render(){
  gridEl.innerHTML='';
  cells=[];
  for(let r=0;r<GRID_SIZE;r++){
    cells.push([]);
    for(let c=0;c<GRID_SIZE;c++){
      const d=document.createElement('div');
      d.className='cell'; d.textContent=grid[r][c];
      d.dataset.r=r; d.dataset.c=c;
      gridEl.appendChild(d);
      cells[r].push(d);
    }
  }
  wordListEl.innerHTML='';
  placed.forEach(p=>{
    const li=document.createElement('li'); li.textContent=p.word; li.dataset.word=p.word;
    wordListEl.appendChild(li);
  });
  foundSet = new Set();
  winEl.classList.remove('show');
  statusEl.textContent = placed.length + ' words hidden. ' + (placed.length < WORD_COUNT ? '(A couple didn\u2019t fit this time.)' : '');
}

function cellFromPoint(x,y){
  const el = document.elementFromPoint(x,y);
  if(el && el.classList && el.classList.contains('cell')) return el;
  return null;
}

function clearSel(){
  dragCells.forEach(d=>d.classList.remove('sel'));
  dragCells=[];
}

function lineCells(a,b){
  const r0=+a.dataset.r,c0=+a.dataset.c,r1=+b.dataset.r,c1=+b.dataset.c;
  const dr=r1-r0,dc=c1-c0;
  const steps=Math.max(Math.abs(dr),Math.abs(dc));
  if(steps===0) return [a];
  const sr = dr===0?0:dr/Math.abs(dr);
  const sc = dc===0?0:dc/Math.abs(dc);
  if(dr!==0 && dc!==0 && Math.abs(dr)!==Math.abs(dc)) return null;
  const out=[];
  for(let i=0;i<=steps;i++) out.push(cells[r0+sr*i][c0+sc*i]);
  return out;
}

function onDown(x,y){
  const el=cellFromPoint(x,y); if(!el) return;
  dragging=true; startCell=el; clearSel();
  el.classList.add('sel'); dragCells=[el];
}
function onMove(x,y){
  if(!dragging) return;
  const el=cellFromPoint(x,y); if(!el) return;
  const line=lineCells(startCell,el);
  if(!line) return;
  dragCells.forEach(d=>d.classList.remove('sel'));
  dragCells=line;
  dragCells.forEach(d=>d.classList.add('sel'));
}
function onUp(){
  if(!dragging) return;
  dragging=false;
  checkSelection();
  clearSel();
}

function checkSelection(){
  if(dragCells.length<2) return;
  const coords = dragCells.map(d=>[+d.dataset.r,+d.dataset.c]);
  const rev = [...coords].reverse();
  for(const p of placed){
    if(foundSet.has(p.word)) continue;
    const match = sameSeq(coords,p.cells) || sameSeq(rev,p.cells);
    if(match){
      foundSet.add(p.word);
      p.cells.forEach(([r,c])=>cells[r][c].classList.add('done'));
      const li = wordListEl.querySelector(`[data-word="${p.word}"]`);
      if(li) li.classList.add('done');
      if(foundSet.size===placed.length){
        winEl.classList.add('show');
        statusEl.textContent='';
      }
      return;
    }
  }
}
function sameSeq(a,b){
  if(a.length!==b.length) return false;
  for(let i=0;i<a.length;i++) if(a[i][0]!==b[i][0]||a[i][1]!==b[i][1]) return false;
  return true;
}

gridEl.addEventListener('mousedown', e=>onDown(e.clientX,e.clientY));
window.addEventListener('mousemove', e=>onMove(e.clientX,e.clientY));
window.addEventListener('mouseup', onUp);
gridEl.addEventListener('touchstart', e=>{onDown(e.touches[0].clientX,e.touches[0].clientY); e.preventDefault();},{passive:false});
gridEl.addEventListener('touchmove', e=>{onMove(e.touches[0].clientX,e.touches[0].clientY); e.preventDefault();},{passive:false});
gridEl.addEventListener('touchend', onUp);

function newPuzzle(){
  const pool = [...BANKS[CATEGORY]].sort(()=>Math.random()-0.5).slice(0,WORD_COUNT);
  buildGrid(pool);
  render();
}

newPuzzle();
