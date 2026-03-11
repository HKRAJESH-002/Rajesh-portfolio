function openCert(src){
document.getElementById("certModal").style.display="block";
document.getElementById("certView").src=src;
}

function closeCert(){
document.getElementById("certModal").style.display="none";
}

particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
color:{value:"#00a87e"},
line_linked:{enable:true,color:"#00a87e"},
move:{speed:2}
}
});

const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({alpha:true});

renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry=new THREE.IcosahedronGeometry();
const material=new THREE.MeshBasicMaterial({color:0x00a87e,wireframe:true});
const mesh=new THREE.Mesh(geometry,material);

scene.add(mesh);
camera.position.z=3;

function animate(){

requestAnimationFrame(animate);

mesh.rotation.x+=0.005;
mesh.rotation.y+=0.01;

renderer.render(scene,camera);

}

animate();