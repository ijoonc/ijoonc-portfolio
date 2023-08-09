import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";


/**
 * 
 * This Ball file represents the computer skills I have learned and utilized so far. They contain
 * the Programming Languages, Software, and Technical Skills I have developed.
 * 
 **/
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (

    // Ball details that reflect user interactions
    <Float speed = {1.75} rotationIntensity = {1} floatIntensity = {2}>

      {/* These lighting features show the light as we rotate the ball */}
      <ambientLight intensity = {0.25} />
      <directionalLight position = {[0, 0, 0.05]} />

      {/* These shadows are casted as the ball rotates */}
      <mesh castShadow receiveShadow scale = {2.75}>
        <icosahedronGeometry args = {[1, 1]} />
        <meshStandardMaterial color = '#fff8eb'
                              polygonOffset
                              polygonOffsetFactor={-5}
                              flatShading/>

        {/* These settings control the position and rotation of the balls */}
        <Decal position = {[0, 0, 1]}
               map = {decal}
               rotation = {[2 * Math.PI, 0, 6.25]}
               flatShading />
               
      </mesh>
    </Float>
  )
}


/**
 * 
 * We need to place all 3D models onto a canvas -- easier manipulation of variables/model settings
 * 
 */
const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}>

    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} />

      {/* Select the image of the ball (the specific computer skill I have chosen) */}
      <Ball imgUrl={icon} />
    </Suspense>

    <Preload all />

    </Canvas>
  )
}

export default BallCanvas