"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "./ui/threejs/loader";
import { AsciiRenderer } from "@react-three/drei";
import { Flow } from "./ui/threejs/flow";

export default function Hero() {
  return (
    <section className="w-full h-[calc(100vh-80px)] bg-background">
      <Canvas
        shadows
        camera={{
          position: [0, 0, 5],
        }}
      >
        <color attach="background" args={["black"]} />
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
          <Flow />
        </Suspense>
        <AsciiRenderer fgColor="white" bgColor="black" />
      </Canvas>
    </section>
  );
}
