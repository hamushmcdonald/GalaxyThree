import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// instantiate a loader
const loader = new PCDLoader();

// load a resource
loader.load(
	// resource URL
	'pointcloud.pcd',
	// called when the resource is loaded
	function (mesh) {

		scene.add(mesh);

	},
	// called when loading is in progresses
	function (xhr) {

		console.log((xhr.loaded / xhr.total * 100) + '% loaded');

	},
	// called when loading has errors
	function (error) {

		console.log('An error happened');

	}
);

camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;

	renderer.render(scene, camera);
};

animate();