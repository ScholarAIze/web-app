'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#1E40AF"
          distort={0.3}
          speed={1.5}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 4;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#0D9488" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function Scene() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <AnimatedSphere />
      <Particles />
    </group>
  );
}

export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -5]} intensity={0.4} color="#0D9488" />
        <Scene />
      </Canvas>
    </div>
  );
}
