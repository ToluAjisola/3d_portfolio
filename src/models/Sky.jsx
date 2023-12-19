import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";
const Sky = () => {

    const sky = useGLTF(skyScene);

    return (
      <mesh>
        {/* use the primitive element when you want to directly embed a complex
        3D model or scene*/}
        <primitive object={sky.scene} />
      </mesh>
    );
};

export default Sky;
