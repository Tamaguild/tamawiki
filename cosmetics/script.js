import * as THREE from 'three';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.160/examples/jsm/controls/OrbitControls.js';
import { DATA } from './data.js';

let scene, camera, renderer, controls;
let player, currentHat, currentBackpack;

init();
createUI();

function init() {
  const viewer = document.getElementById('viewer');

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x222222);

  camera = new THREE.PerspectiveCamera(
    75,
    viewer.clientWidth / viewer.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 1, 4);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(viewer.clientWidth, viewer.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  viewer.appendChild(renderer.domElement);

  renderer.setClearColor(0x000000, 0);

  const light = new THREE.AmbientLight(0xffffff, 2);
  scene.add(light);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  const loader = new GLTFLoader();
  loader.load(DATA.player, (gltf) => {
    player = gltf.scene;

    fixTexture(player);
    scene.add(player);

    fitModel(player);
  });

  animate();
}

// ===== FIX TEXTURE =====
function fixTexture(obj) {
  obj.traverse((c) => {
    if (c.isMesh && c.material.map) {
      c.material.map.magFilter = THREE.NearestFilter;
      c.material.map.minFilter = THREE.NearestFilter;
      c.material.map.generateMipmaps = false;
    }
  });
}

// ===== AUTO FIT MODEL =====
function fitModel(obj) {
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());

  obj.position.sub(center);

  const maxDim = Math.max(size.x, size.y, size.z);
  const scale = 2 / maxDim;

  obj.scale.set(scale, scale, scale);
}

// ===== HAT =====
function loadHat(item) {
  const loader = new GLTFLoader();

  if (currentHat && currentHat.userData.model === item.model) {
    player.remove(currentHat);
    currentHat = null;
    return false;
  }

  if (currentHat) player.remove(currentHat);

  loader.load(item.model, (gltf) => {
    currentHat = gltf.scene;

    currentHat.userData.model = item.model;

    fixTexture(currentHat);
    player.add(currentHat);

    currentHat.scale.set(item.scale, item.scale, item.scale);
    currentHat.position.set(item.position.x, item.position.y, item.position.z);
    currentHat.rotation.set(item.rotation.x, item.rotation.y, item.rotation.z);
  });

  return true;
}

// ===== BACKPACK =====
function loadBackpack(item) {
  const loader = new GLTFLoader();

  if (currentBackpack && currentBackpack.userData.model === item.model) {
    player.remove(currentBackpack);
    currentBackpack = null;
    return false;
  }

  if (currentBackpack) player.remove(currentBackpack);

  loader.load(item.model, (gltf) => {
    currentBackpack = gltf.scene;

    currentBackpack.userData.model = item.model;

    fixTexture(currentBackpack);
    player.add(currentBackpack);

    currentBackpack.scale.set(item.scale, item.scale, item.scale);
    currentBackpack.position.set(item.position.x, item.position.y, item.position.z);
    currentBackpack.rotation.set(item.rotation.x, item.rotation.y, item.rotation.z);
  });

  return true;
}

// ===== UI =====
function createUI() {
  const hatList = document.getElementById('hatList');
  const backpackList = document.getElementById('backpackList');

  DATA.hats.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';

    div.innerHTML = `
      <img src="${item.gif}">
      <div class="tooltip">${item.name}</div>
    `;

    div.onclick = () => {
      const isOn = loadHat(item);
      if (isOn) setActive(div, 'hat');
      else div.classList.remove('active');
    };

    hatList.appendChild(div);
  });

  DATA.backpacks.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';

    div.innerHTML = `
      <img src="${item.gif}">
      <div class="tooltip">${item.name}</div>
    `;

    div.onclick = () => {
      const isOn = loadBackpack(item);
      if (isOn) setActive(div, 'backpack');
      else div.classList.remove('active');
    };

    backpackList.appendChild(div);
  });
}

// ===== ACTIVE UI =====
function setActive(clicked, type) {
  const listId = type === 'hat' ? 'hatList' : 'backpackList';
  const list = document.getElementById(listId);

  list.querySelectorAll('.item').forEach(i => {
    i.classList.remove('active');
  });

  clicked.classList.add('active');
}

// ===== RENDER PNG =====
function renderAndSave(name) {
  renderer.render(scene, camera);

  const dataURL = renderer.domElement.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = dataURL;
  link.download = name + ".png";
  link.click();
}

// ===== BATCH EXPORT =====
async function renderAllPNGs() {
  const loader = new GLTFLoader();

  renderer.setClearColor(0x000000, 0);
  renderer.setSize(512, 512);

  camera.aspect = 1;
  camera.updateProjectionMatrix();

  // HATS
  for (const item of DATA.hats) {
    await new Promise(resolve => {
      loader.load(item.model, (gltf) => {
        const obj = gltf.scene;

        fixTexture(obj);
        player.add(obj);

        obj.scale.set(item.scale, item.scale, item.scale);
        obj.position.set(item.position.x, item.position.y, item.position.z);
        obj.rotation.set(item.rotation.x, item.rotation.y, item.rotation.z);

        renderAndSave(item.name);

        player.remove(obj);
        setTimeout(resolve, 200);
      });
    });
  }

  // BACKPACKS
  for (const item of DATA.backpacks) {
    await new Promise(resolve => {
      loader.load(item.model, (gltf) => {
        const obj = gltf.scene;

        fixTexture(obj);
        player.add(obj);

        obj.scale.set(item.scale, item.scale, item.scale);
        obj.position.set(item.position.x, item.position.y, item.position.z);
        obj.rotation.set(item.rotation.x, item.rotation.y, item.rotation.z);

        renderAndSave(item.name);

        player.remove(obj);
        setTimeout(resolve, 200);
      });
    });
  }

  alert("Done rendering PNGs!");
}

// ===== LOOP =====
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// ===== RESIZE =====
window.addEventListener('resize', () => {
  const viewer = document.getElementById('viewer');

  camera.aspect = viewer.clientWidth / viewer.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(viewer.clientWidth, viewer.clientHeight);
});

// ===== GLOBAL BUTTON =====
window.renderAllPNGs = renderAllPNGs;