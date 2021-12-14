<template>
  <v-row>
    <div id="three-canvas" />
    <video id="video" width="800" height="600" preload="auto" no-controls autoplay loop muted :style="{'display': 'none'}">
      <source src="/video2.mp4" type='video/mp4'>
    </video>
  </v-row>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {

  data() {

    return {

      scene: null,

      sceneControls: null,

      renderer: null,

      camera: null,

      cameraControls: null,

      texture: null,

      controls: null,

      material: null,

      mesh: null

    };

  },

  mounted() {

    this.init();

    this.animate();

    document.getElementById('video').play();

  },

  methods: {

    init() {

      // создаем сцену
      this.scene = new THREE.Scene();
      this.sceneControls = new THREE.Scene();

      // создаем камеру
      this.camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      // создаем камеру
      this.cameraControls = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );


      this.renderer = new THREE.WebGLRenderer( { antialias: true } );
      
      this.renderer.autoClear = false;

      this.renderer.setSize(window.innerWidth, window.innerHeight);

      document.body.appendChild(this.renderer.domElement);

      this.controls = new OrbitControls( this.camera, this.renderer.domElement );

      this.controls2 = new OrbitControls( this.cameraControls, this.renderer.domElement );

      this.controls.autoRotate = true;

      this.controls.enableDamping = true;

      this.controls2.autoRotate = true;

      this.controls2.enableDamping = true;

      // const video = document.createElement('video');

      // video.src = "http://localhost:3000/video.mp4";
      // video.autoplay = true;

      const video = document.getElementById('video');

       // this.texture = new THREE.TextureLoader().load( 'http://192.168.1.20:3000/panoram.jpg' );
      this.texture = new THREE.VideoTexture( video );

      this.texture.minFilter = THREE.LinearFilter;
    
      this.texture.magFilter = THREE.LinearFilter;

      this.texture.needsUpdate = true;
    
      this.texture.format = THREE.RGBFormat;

      const geometry = new THREE.SphereGeometry( 5, 20, 20);

      // const geometryFloor = new THREE.SphereGeometry( 5, 20, 20);
      
      // const geometryFloor = new THREE.PlaneGeometry(108, 71);

      // const geometryFloor = new THREE.Geometry();

      // geometryFloor.vertices.push( new THREE.Vector3( x, y, z ) );
    
      this.material = new THREE.MeshBasicMaterial( {map: this.texture , side: THREE.BackSide, toneMapped: false} );

      // const materialFloor = new THREE.LineBasicMaterial({color: 0xffff00, side: THREE.DoubleSide});

      // const material = new THREE.MeshBasicMaterial( { color: 0xffffff, linewidth: 1 } );


    
      this.mesh = new THREE.Mesh( geometry, this.material );

      // const meshFloor = new THREE.Mesh( geometryFloor, materialFloor );
 

      this.scene.add( this.mesh );
      // this.scene.add( this.meshFloor );

const helper = new THREE.GridHelper( 2000, 100 );
				helper.position.y = -2;
				helper.material.opacity = 0;
				this.sceneControls.add( helper );

      // this.scene.add( meshFloor );

      this.camera.position.z = 5;

      this.cameraControls.position.z = 5;

      const that = this;

      this.texture.update = function() {



            that.texture.needsUpdate = true;



            

      }

    },

    animate() {

      this.renderer.setAnimationLoop( () => {

            this.material.map = this.texture;
            this.material.needsUpdate = true;
            this.mesh.material.map.needsUpdate = true;
            this.renderer.clear();   
            this.renderer.render(this.scene, this.camera);
            this.renderer.clearDepth();   
            this.renderer.render(this.sceneControls, this.cameraControls);

      });

      this.controls.update();
      this.controls2.update();
    
    },

  }

}

</script>

