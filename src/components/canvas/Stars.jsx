import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from 'maath/random/dist/maath-random.esm';


/**
 * 
 * This Stars file contains the stars settings and components in the Contact Section.
 * It adds extra details to the Earth, making it more eye-appealing for the user.
 * 
 **/
const Stars = (props) => {

  const ref = useRef();

  // Create our basic sphere of stars
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  // Position and rotate our stars accordingly
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  return (
    
    // Basic rotation settings for the stars
    <group rotation = {[0, 0, Math.PI / 4]}>

      {/* Stars are represented as points in space */}
      <Points ref = {ref} positions = {sphere} stride = {3} frustumCulled {...props}>
        <PointMaterial transparent color = '#ffffff' size = {0.002} sizeAttenuation = {true} depthWrite = {false} />
      </Points>
    </group>
  )
}


/**
 * 
 * We need to place all 3D models onto a canvas -- easier manipulation of variables/model settings
 * 
 */
const StarsCanvas = () => {
  return (
    <div className = 'w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera = {{ position: [0, 0, 1]}}>

        <Suspense fallback = {null}>
          <Stars />
        </Suspense>

        <Preload all />

      </Canvas>
    </div>
  )
}

export default StarsCanvas;