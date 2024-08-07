import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, ShaderMaterial } from "three";

const WaveShaderMaterial = {
  uniforms: {
    uTime: { value: 0.0 },
  },
  vertexShader: `
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 pos = position;
        pos.z = sin(pos.x * 5.0 + uTime) * 0.5;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
  fragmentShader: `
      varying vec2 vUv;
      void main() {
        gl_FragColor = vec4(vUv, 1.0, 1.0);
      }
    `,
};

export function Flow() {
  const meshRef = useRef<Mesh>(null!);
  const materialRef = useRef<ShaderMaterial>(null!);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[5, 5, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        attach="material"
        args={[WaveShaderMaterial]}
      />
    </mesh>
  );
}
