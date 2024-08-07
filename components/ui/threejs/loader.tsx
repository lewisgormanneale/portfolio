import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ width: "100px", height: "10px", background: "#ccc" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#000",
          }}
        />
      </div>
    </Html>
  );
}
