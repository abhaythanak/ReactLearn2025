//         01

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// // Scene setup
// const scene = new THREE.Scene();

// // Camera setup
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Create geometry
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// // Renderer setup
// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector('#canvas'),
//   antialias: true,
// });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

// // Orbit controls setup
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// renderer.render(scene,camera)

// // Animation loop
// function animate() {
//   window.requestAnimationFrame(animate);
//   // mesh.rotation.x += 0.01;
//   controls.update();
//   renderer.render(scene, camera);
// }
// animate();

// // Handle window resize
// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

//             02

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// // Scene setup
// const scene = new THREE.Scene();

// // Camera setup
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Create geometry
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 'red' });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// // Renderer setup
// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector('#canvas'),
//   antialias: true,
// });

// renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
// renderer.setSize(window.innerWidth, window.innerHeight);


// // Animation loop
// function animate() {
//   window.requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
// animate();

import './style.css';
import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import gsap from 'gsap';

let model;
// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color("black"); // Set white background

// Camera setup
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5;

// Renderer setup first (needed for pmremGenerator)
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas'),
  antialias: true,
  alpha: true,
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

// Post Processing Setup
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const rgbShiftPass = new ShaderPass(RGBShiftShader);
rgbShiftPass.uniforms['amount'].value = 0.0005; // Reduced from 0.0015 for a lighter effect
composer.addPass(rgbShiftPass);

// Create PMREMGenerator
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

// Load HDR environment map
const rgbeLoader = new RGBELoader();
rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/lakeside_sunrise_1k.hdr', function(texture) {
    const envMap = pmremGenerator.fromEquirectangular(texture).texture;
    scene.environment = envMap;
    
    texture.dispose();
    pmremGenerator.dispose();
});

// Create GLTF Loader
const loader = new GLTFLoader();

// Load 3D Model
loader.load(
  '/DamagedHelmet.gltf',
  function (gltf) {
    // Scale the model if needed
    model = gltf.scene
    scene.add(model);
  },
  // Error callback
  function (error) {
    console.error('An error happened:', error);
  }
);

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 10);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(2, 2, 5);
scene.add(directionalLight);

// Add OrbitControls

//mousemove
window.addEventListener('mousemove',(e)=>{
  const rotationX = (e.clientX / window.innerWidth - 0.5) *( Math.PI * .4);
  const rotationY = (e.clientY / window.innerHeight - 0.5) *( Math.PI * .4);
  // model.rotation.y = rotationX
  // model.rotation.x = rotationY
  gsap.to(model.rotation, {
    y: rotationX,
    x: rotationY,
    duration: 0.9,
    ease: "power2.out"
  });

})

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});



// Animation loop
function animate() {
  window.requestAnimationFrame(animate);

  composer.render(); // Use composer instead of renderer
}
animate();
