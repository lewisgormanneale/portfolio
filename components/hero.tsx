"use client";

import { Canvas } from "@react-three/fiber";
import { Box } from "./ui/threejs/box";
import { Suspense } from "react";
import { Loader } from "./ui/threejs/loader";

export default function Hero() {
  return (
    <section className="w-screen h-screen">
      <Canvas
        shadows
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Suspense>
      </Canvas>
    </section>
  );
}
