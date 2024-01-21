import { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from "../components/HomeInfo";

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

  const adjustSkyForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, -50];
    let rotaion = [0.1, 4.7, 0];

    
      screenScale = 12;

    return [screenScale, screenPosition, rotaion];
  };

  const [skyScale, skyPosition, skyRotation] =
    adjustSkyForScreenSize();
  
  
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
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  

    return (
      <section className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
        <Canvas
          className={
            'w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}'
          }
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 0.2]} intensity={2} />
            <ambientLight intensity={0.5} color={0x9fc5e8} />
            {/* or <pointLight position={[10, 5, 10]} intensity={2} /> if no directional or ambient light */}
            <spotLight />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={0}
            />

            <Bird />
            <Sky
              isRotating={isRotating}
              position={skyPosition}
              scale={skyScale}
              //rotation={skyRotation}
              //rotation={[-Math.PI / 2, 0, 0]}
              //scale={50000}
            />
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
              position={planePosition}
              rotation={[0, 20.1, 0]}
              scale={planeScale}
            />
          </Suspense>
        </Canvas>
      </section>
    );
}

export default Home