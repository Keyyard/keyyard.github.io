// Procedural trophy geometries — placeholders until real Blockbench GLB models are ready.
// All components must be used inside an @react-three/fiber Canvas.
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function useFloat(speed = 1.0, amplitude = 0.04) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(clock.elapsedTime * speed) * amplitude;
    ref.current.rotation.y += 0.004;
  });
  return ref;
}

// 1. Gem Trophy — octahedron crystal on a pedestal
export function GemTrophy({ color = "#4ECDC4" }: { color?: string }) {
  const ref = useFloat(1.0, 0.04);
  return (
    <group ref={ref}>
      <mesh>
        <octahedronGeometry args={[0.34, 0]} />
        <meshStandardMaterial color={color} metalness={0.85} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.52, 0]}>
        <cylinderGeometry args={[0.13, 0.18, 0.1, 8]} />
        <meshStandardMaterial color="#3A2810" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0, -0.59, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.04, 8]} />
        <meshStandardMaterial color="#2A1E08" metalness={0.4} roughness={0.6} />
      </mesh>
    </group>
  );
}

// 2. Cup Trophy — chalice with handles
export function CupTrophy({ color = "#F5C542" }: { color?: string }) {
  const ref = useFloat(0.9, 0.035);
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.3, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0.32, -0.04, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.1, 0.025, 8, 16, Math.PI]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.32, -0.04, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <torusGeometry args={[0.1, 0.025, 8, 16, Math.PI]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.38, 0]}>
        <cylinderGeometry args={[0.04, 0.07, 0.38, 8]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.06, 8]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

// 3. Star Trophy — extruded five-pointed star
const _starShape = new THREE.Shape();
{
  const outerR = 0.3, innerR = 0.12, pts = 5;
  for (let i = 0; i < pts * 2; i++) {
    const angle = (i * Math.PI) / pts - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    if (i === 0) _starShape.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
    else _starShape.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
  }
  _starShape.closePath();
}

export function StarTrophy({ color = "#9B59B6" }: { color?: string }) {
  const ref = useFloat(1.1, 0.045);
  return (
    <group ref={ref}>
      <mesh position={[0, 0.1, 0]}>
        <extrudeGeometry args={[_starShape, { depth: 0.12, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2 }]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.52, 0]}>
        <cylinderGeometry args={[0.16, 0.2, 0.06, 6]} />
        <meshStandardMaterial color="#2A1E08" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
}

// 4. Sword Trophy — blade, guard, handle, pommel
export function SwordTrophy({ color = "#E74C3C" }: { color?: string }) {
  const ref = useFloat(0.8, 0.03);
  return (
    <group ref={ref}>
      <mesh position={[0, 0.22, 0]}>
        <boxGeometry args={[0.07, 0.68, 0.04]} />
        <meshStandardMaterial color={color} metalness={0.95} roughness={0.05} />
      </mesh>
      <mesh position={[0, 0.6, 0]}>
        <coneGeometry args={[0.035, 0.12, 4]} />
        <meshStandardMaterial color={color} metalness={0.95} roughness={0.05} />
      </mesh>
      <mesh position={[0, -0.14, 0]}>
        <boxGeometry args={[0.3, 0.06, 0.06]} />
        <meshStandardMaterial color="#C89B3C" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.32, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
        <meshStandardMaterial color="#5C3317" metalness={0.2} roughness={0.8} />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshStandardMaterial color="#C89B3C" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

// 5. Medal Trophy — disc, ribbon, pin bar
export function MedalTrophy({ color = "#78B04A" }: { color?: string }) {
  const ref = useFloat(1.2, 0.05);
  return (
    <group ref={ref}>
      <mesh>
        <cylinderGeometry args={[0.28, 0.28, 0.07, 32]} />
        <meshStandardMaterial color={color} metalness={0.85} roughness={0.15} />
      </mesh>
      <mesh position={[0, 0.04, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.02, 32]} />
        <meshStandardMaterial color={color} metalness={0.95} roughness={0.05} />
      </mesh>
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[0.1, 0.5, 0.03]} />
        <meshStandardMaterial color="#C0392B" metalness={0.1} roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.72, 0]}>
        <boxGeometry args={[0.22, 0.06, 0.04]} />
        <meshStandardMaterial color={color} metalness={0.85} roughness={0.15} />
      </mesh>
    </group>
  );
}

export const SHAPE_MAP: Record<string, React.ComponentType<{ color?: string }>> = {
  gem: GemTrophy,
  cup: CupTrophy,
  star: StarTrophy,
  sword: SwordTrophy,
  medal: MedalTrophy,
};
