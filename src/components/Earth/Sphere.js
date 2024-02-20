import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame } from "@react-three/fiber";

import colorMep from "./texture/color.jpg";
import normalMep from "./texture/normal.png";
import occlusionMep from "./texture/occlusion.jpg";

export default function Sphere() {
  const meshRef = useRef(null);
  const [color, normal, aoMap] = useLoader(TextureLoader, [ colorMep, normalMep, occlusionMep])

  useFrame(() => (meshRef.current.rotation.y += 0.001));

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh ref={meshRef} position={[0, 0, -2]}>
            <sphereGeometry args={[2.5, 64,64]} />
            <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
          </mesh>
      </group>
    </group>
  );
}

