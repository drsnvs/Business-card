// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { MathUtils } from 'three';
// interface AnimatedSphereProps {
//   position: [number, number, number]; // assuming it's a 3D coordinate
//   size: number;
//   speed: number;
//   color: string;
// }
// const AnimatedSphere: React.FC<AnimatedSphereProps> = ({ position, size, speed, color }) => {
//   const mesh = useRef(null);
  
//   useFrame((state) => {
//     if (!mesh.current) return;
    
//     // Gentle floating animation
//     mesh.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * speed) * 0.5;
    
//     // Slow rotation
//     mesh.current.rotation.x += 0.003;
//     mesh.current.rotation.y += 0.005;
//   });
  
//   return (
//     <mesh position={position} ref={mesh}>
//       <sphereGeometry args={[size, 32, 32]} />
//       <meshStandardMaterial 
//         color={color} 
//         metalness={0.8}
//         roughness={0.2}
//         envMapIntensity={0.5}
//       />
//     </mesh>
//   );
// };

// const FloatingObjects = () => {
//   const particles = Array.from({ length: 15 }).map((_, i) => ({
//     position: [
//       MathUtils.randFloatSpread(20),
//       MathUtils.randFloatSpread(20), 
//       MathUtils.randFloatSpread(10) - 15
//     ],
//     size: MathUtils.randFloat(0.5, 1.5),
//     speed: MathUtils.randFloat(0.1, 0.5),
//     color: i % 3 === 0 ? '#d4af37' : i % 2 === 0 ? '#3a5a87' : '#3c65b5'
//   }));
  
//   return (
//     <>
//       {particles.map((particle, i) => (
//         <AnimatedSphere key={i} {...particle} />
//       ))}
//     </>
//   );
// };

// const AnimatedBackground = () => {
//   return (
//     <div className="canvas-container">
//       <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 10]} intensity={1} />
//         <pointLight position={[-10, -10, -10]} intensity={0.5} />
//         <FloatingObjects />
//       </Canvas>
//     </div>
//   );
// };

// export default AnimatedBackground;
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

// Define the types for your props
interface AnimatedSphereProps {
  position: [number, number, number]; // assuming it's a 3D coordinate (tuple)
  size: number;
  speed: number;
  color: string;
}

// AnimatedSphere component with proper typing
const AnimatedSphere: React.FC<AnimatedSphereProps> = ({ position, size, speed, color }) => {
  // Correctly typing the ref to a THREE.Mesh
  const mesh = useRef<THREE.Mesh>(null!);

  // Using useFrame for animation
  useFrame((state) => {
    if (!mesh.current) return;

    // Gentle floating animation
    mesh.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * speed) * 0.5;

    // Slow rotation
    mesh.current.rotation.x += 0.003;
    mesh.current.rotation.y += 0.005;
  });

  return (
    <mesh position={position} ref={mesh}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.8}
        roughness={0.2}
        envMapIntensity={0.5}
      />
    </mesh>
  );
};

const FloatingObjects = () => {
  // Generate particles with explicit position tuple of length 3
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    position: [
      MathUtils.randFloatSpread(20),
      MathUtils.randFloatSpread(20),
      MathUtils.randFloatSpread(10) - 15
    ] as [number, number, number], // This ensures the position is a tuple with 3 elements
    size: MathUtils.randFloat(0.5, 1.5),
    speed: MathUtils.randFloat(0.1, 0.5),
    color: i % 3 === 0 ? '#d4af37' : i % 2 === 0 ? '#3a5a87' : '#3c65b5'
  }));

  return (
    <>
      {particles.map((particle, i) => (
        <AnimatedSphere key={i} {...particle} />
      ))}
    </>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="canvas-container" style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <FloatingObjects />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
