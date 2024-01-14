import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky_pano_-_milkyway.glb";
const Sky = ({ isRotating, ...props }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef} {...props}>
      {/* use the primitive element when you want to directly embed a complex
        3D model or scene*/}
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
