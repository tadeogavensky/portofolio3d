import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Model = ({ isMobile, isTablet }) => {
  const galaxy = useGLTF("./gaming_desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />

      <spotLight
        position={[20, 70, 40]}
        angle={0.42}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={galaxy.scene}
        scale={isMobile ? 0.3 : isTablet ? 0.4 : 0.6}
        position={
          isMobile
            ? [0.3, -1.0, -0.6]
            : isTablet
            ? [0, -1.5, -0.8]
            : [0, -3.25, -1.5]
        }
        rotation={[-0.01, 0.5, -0.1]}
      />
    </mesh>
  );
};

const ModelCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQueryMobile = window.matchMedia("(max-width: 500px)");
    const mediaQueryTablet = window.matchMedia("(max-width: 1020px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQueryMobile.matches);
    setIsTablet(mediaQueryTablet.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      setIsTablet(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQueryMobile.addEventListener("change", handleMediaQueryChange);
    mediaQueryTablet.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQueryMobile.removeEventListener("change", handleMediaQueryChange);
      mediaQueryTablet.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Model isMobile={isMobile} isTablet={isTablet} />
          </Suspense>

          <Preload all />
        </Canvas>
      )}
    </>
  );
};

export default ModelCanvas;
