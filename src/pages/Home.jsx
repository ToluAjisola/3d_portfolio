import { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';

const Home = () => {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43.4];
     let rotaion = [0.1, 4.7, 0];
    
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotaion];
  };

  
  
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [planeScale, planePosition] = adjustPlaneForScreenSize();
const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
    return (
      <section className="w-full h-screen relative">
        {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                Home</div> */}
        <Canvas
          className={
            'w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}'
          }
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            {/* or <pointLight position={[10, 5, 10]} intensity={2} /> if no directional or ambient light */}
            <spotLight />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={0}
            />

            <Bird />
            <Sky />
            <Island
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              setCurrentStage={setCurrentStage}
            />
            <Plane
              isRotating={isRotating}
              planePosition={planePosition}
              rotation={[0, 20.1, 0]}
              planeScale={planeScale}
            />
          </Suspense>
        </Canvas>
      </section>
    );
}

export default Home