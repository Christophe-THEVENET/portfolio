import { AxesHelper, Mesh, MeshNormalMaterial, PerspectiveCamera, Scene, WebGLRenderer,BoxBufferGeometry } from 'three';



// import pour debug
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';








// ************** crée la scene *****************
const scene = new Scene();

// ***********  ajoute dans la scene *************

// crée les axes (reperes visuel)
scene.add(new AxesHelper());

// crée caméra qui regarde la scene
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);

//change position de la camera vers moi
camera.position.z = 2;
camera.position.y = 0.5;
camera.position.x = 0.5;

// ajoute caméra a la scene
scene.add(camera);



//ajoute un cube (objet position, texture)
const cube = new Mesh(
  //taille
new BoxBufferGeometry(1,1,1),
//texture pour debug
new MeshNormalMaterial()
);


// ajoute caméra a la scene
scene.add(cube);






// ****************** rend la scene ***************

//objet en option active l antialiasing
const renderer = new WebGLRenderer({
  antialias: true,
});

// taille  du rendu (fullscreen)
renderer.setSize(window.innerWidth, window.innerHeight);

// si ecran > fullHD
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// ajoute au DOM
document.body.appendChild(renderer.domElement);



// *********** OrbitControls pour debug **********

const controls = new OrbitControls(camera, renderer.domElement);





// fait le rendu par rapport a la camera
renderer.render(scene, camera);





// crée une fonction qui fera un rendu
function tick() {
  renderer.render(scene, camera);
  // fait bouger sur x
  camera.position.x += 0.01;
  //dire a la camera de regarder depuis le centre
camera.lookAt(0,0,0);
controls.update();
  // rejouer
  requestAnimationFrame(tick);
}


tick();



// **************** responsive de la scene ********

// écoute le changement de taille fenetre
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)

})