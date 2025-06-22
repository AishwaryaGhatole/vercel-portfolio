import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "../../index.css";



// const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768 );

//   useEffect(()=>{
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])
//   return isMobile;
// }

// const isMobile = useIsMobile()

// const NUM_STARS = isMobile ? 500 : 1000; 

const NUM_STARS = 300;

const Stars = () => {
  const ref = useRef(null);

  const sphere = random.inSphere(new Float32Array(NUM_STARS * 3), { radius: 1 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="stars-canvas-container">
    <Canvas dpr={[1, 1.5]} gl={{ powerPreference: "high-performance" }} camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={<div className="stars-loader" />}>
        <Stars />
      </Suspense>

      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
