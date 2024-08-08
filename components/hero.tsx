"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Loader } from "./ui/threejs/loader";
import { AsciiRenderer } from "@react-three/drei";
import { Flow } from "./ui/threejs/flow";

export default function Hero() {
  return (
    <section className="w-full h-[calc(100vh-80px)] bg-background">
      <Canvas
        camera={{
          position: [0, 0, 5],
        }}
      >
        <color attach="background" args={["black"]} />
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 15, 10]} intensity={1} />
          <Flow />
          <AsciiRenderer fgColor="cyan" bgColor="transparent" />
        </Suspense>
      </Canvas>
    </section>
  );
}
