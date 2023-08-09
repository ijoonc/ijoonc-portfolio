import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


/**
 * 
 * This Earth file contains the 3D model components for the Earth display in the Contacts section.
 * 
 **/
const Earth = () => {

  // We use GLTF for most 3D models
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive object = {earth.scene}
               scale = {2.5} 
               position-x = {0} 
               rotation-y = {0} />
  )
}


/**
 * 
 * We need to place all 3D models onto a canvas -- easier manipulation of variables/model settings
 * 
 */
const EarthCanvas = () => {
  return (

    // These settings are necessary for the Earth to stand out (next to the contact form)
    <Canvas shadows frameLoop = 'demand' gl = {{ preserveDrawingBuffer: true }} 
            camera = {{ fov: 45, near: 0.1, far: 200, position: [-4, 7, 7]}}>
      <Suspense fallback = {<CanvasLoader />}>

        {/* Controls the orbit settings for our Earth */}
        <OrbitControls autoRotate enableZoom = {false} maxPolarAngle = {Math.PI / 2} minPolarAngle = {Math.PI / 2} />

        <Earth />

      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;