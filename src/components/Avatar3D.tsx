import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useMode } from "@/context/ModeContext";
import * as THREE from "three";

const FloatingShape = ({ color }: { color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          distort={0.25}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
};

const Avatar3D = () => {
  const { mode } = useMode();
  const color = mode === "developer" ? "#F97316" : "#22C55E";

  return (
    <div className="relative w-full h-[350px] md:h-[400px] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ position: "absolute", inset: 0 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color={color} />
        <FloatingShape color={color} />
      </Canvas>
    </div>
  );
};

export default Avatar3D;
