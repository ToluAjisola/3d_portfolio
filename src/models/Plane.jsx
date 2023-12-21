import React from 'react'
import planeScene from "../assets/3d/plane.glb";

const Plane = () => {
  // Load the 3D model and animations from the provided GLTF file
    const { scene, animations } = useGLTF(planeScene);
    
    return (
      <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
        <primitive object={scene} />
        </mesh>
    );
}

export default Plane