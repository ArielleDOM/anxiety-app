// import React, { useRef } from "react";
// import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
// import {
//   CubeTextureLoader,
//   CubeCamera,
//   WebGLCubeRenderTarget,
//   RGBFormat,
//   LinearMipmapLinearFilter
// } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import "./styles.css";

// extend({ OrbitControls });

// const CameraControls = () => {
//   // Get a reference to the Three.js Camera, and the canvas html element.
//   // We need these to setup the OrbitControls class.
//   // https://threejs.org/docs/#examples/en/controls/OrbitControls

//   const {
//     camera,
//     gl: { domElement }
//   } = useThree();

//   // Ref to the controls, so that we can update them on every frame using useFrame
//   const controls = useRef();
//   useFrame(() => controls.current.update());
//   return (
//     <orbitControls
//       ref={controls}
//       args={[camera, domElement]}
//       autoRotate={true}
//       enableZoom={false}
//     />
//   );
// };

// // Loads the skybox texture and applies it to the scene.
// function SkyBox() {
//   const { scene } = useThree();
//   const loader = new CubeTextureLoader();
//   // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
//   const texture = loader.load([
//     'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-x.jpg',
//       'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-x.jpg',
//       'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-y.jpg',
//       'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-y.jpg',
//       'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-z.jpg',
//       'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-z.jpg',
//   ]);

//   // Set the scene background property to the resulting texture.
//   scene.background = texture;
//   return null;
// }

// // Lights
// function Snow() {
//   return (
//     <Canvas className="canvas">
//       <CameraControls />
//       <SkyBox />
//     </Canvas>
//   );
// }

import Particles from 'react-particles-js'
import particlesConfig from './particlesjs-config'

function Snow () {
    return (
    <div>
            <Particles height="100vh" width="100vw" params={particlesConfig} />
    </div>
    )
  }
  
export default Snow

