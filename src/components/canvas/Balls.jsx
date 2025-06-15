// BouncyBalls.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const getRandomVelocity = () => (Math.random() * 0.01 + 0.005) * (Math.random() < 0.5 ? 1 : -1);

const Ball = ({ initialPosition }) => {
  const meshRef = useRef();
  const velocity = useRef([
    getRandomVelocity(),
    getRandomVelocity(),
    getRandomVelocity(),
  ]);

  useFrame(() => {
    if (!meshRef.current) return;

    const mesh = meshRef.current;
    const pos = mesh.position;
    const vel = velocity.current;

    // Bounce logic: reverse velocity if touching boundaries
    for (let i = 0; i < 3; i++) {
      if (pos.getComponent(i) > 3 || pos.getComponent(i) < -3) {
        vel[i] = -vel[i];
      }
    }

    pos.x += vel[0];
    pos.y += vel[1];
    pos.z += vel[2];
  });

  return (
    <Sphere ref={meshRef} args={[0.5, 32, 32]} position={initialPosition}>
      <meshPhysicalMaterial
        color={"skyblue"}
        transparent
        opacity={0.3}
        roughness={0.1}
        metalness={0.3}
        transmission={1} // for glass effect
        clearcoat={1}
      />
    </Sphere>
  );
};

const BallBg = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Ball initialPosition={[-2, 1, 0]} />
      <Ball initialPosition={[2, -1, 0]} />
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
};

export default BallBg;
