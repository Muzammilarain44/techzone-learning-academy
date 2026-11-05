"use client";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NeuralPoints() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 260;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.2 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      arr[i * 3 + 2] = r * Math.cos(phi) * 0.7;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.12;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color="#38bdf8" transparent opacity={0.9} sizeAttenuation />
    </points>
  );
}

function Rig() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.08;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
  });
  return (
    <group ref={group}>
      {/* Central core — AI / neural hub */}
      <mesh>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshStandardMaterial color="#2563eb" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#7c3aed" emissiveIntensity={0.9} roughness={0.3} metalness={0.4} />
      </mesh>
      {/* Orbit rings */}
      <mesh rotation={[Math.PI / 2.4, 0.4, 0]}>
        <torusGeometry args={[1.7, 0.015, 12, 100]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[Math.PI / 1.8, -0.5, 0.3]}>
        <torusGeometry args={[2.1, 0.012, 12, 100]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.55} />
      </mesh>
      {/* Floating workstation / screen blocks */}
      <mesh position={[-2.1, 0.9, -0.4]} rotation={[0.2, 0.5, 0.1]}>
        <boxGeometry args={[1.1, 0.7, 0.08]} />
        <meshStandardMaterial color="#0b1b45" emissive="#0ea5e9" emissiveIntensity={0.35} roughness={0.4} metalness={0.5} />
      </mesh>
      <mesh position={[2.2, -0.7, -0.3]} rotation={[-0.15, -0.4, 0.08]}>
        <boxGeometry args={[0.9, 0.6, 0.08]} />
        <meshStandardMaterial color="#1e1b4b" emissive="#8b5cf6" emissiveIntensity={0.4} roughness={0.4} metalness={0.5} />
      </mesh>
      <mesh position={[1.9, 1.1, 0.2]}>
        <octahedronGeometry args={[0.28, 0]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.8} roughness={0.2} metalness={0.6} />
      </mesh>
      <mesh position={[-1.9, -1.0, 0.3]}>
        <octahedronGeometry args={[0.22, 0]} />
        <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={0.8} roughness={0.2} metalness={0.6} />
      </mesh>
      <NeuralPoints />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[6, 6, 6]} intensity={60} color="#38bdf8" />
      <pointLight position={[-6, -4, 4]} intensity={40} color="#8b5cf6" />
      <Rig />
    </Canvas>
  );
}
