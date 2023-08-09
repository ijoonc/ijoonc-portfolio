import { Html, useProgress } from "@react-three/drei";


/**
 * 
 * This Loader file helps load the Canvas and everything on it -- EarthCanvas, StarsCanvas, etc.
 * 
 **/
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as='div'
          center
          style={{ display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                   flexDirection: "column",
                 }}>

      <span className = 'canvas-loader'></span>
      <p style={{ fontSize: 14,
                  color: "#F1F1F1",
                  fontWeight: 800,
                  marginTop: 40,
               }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;