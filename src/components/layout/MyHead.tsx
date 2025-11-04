import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef, useState } from "react";
import { Object3D, LoopOnce, AnimationMixer } from "three";
function Model({ onLoaded }: { onLoaded: () => void }) {
  const gltf = useGLTF("/assets/myHead.gltf");
  const { scene, animations } = gltf;
  const head = useRef(scene);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [dummy] = useState(() => new Object3D());
  const mixer = useRef<AnimationMixer | null>(null);

  // Call onLoaded when scene is available
  useEffect(() => {
    if (scene) onLoaded();
  }, [scene, onLoaded]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursor({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 0.5,
      });
    };
    const handleClick = () => {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[1]);
      action.setLoop(LoopOnce, 1); // Set the loop mode to play once
      action.clampWhenFinished = true; // Stop at the last frame
      action.play();
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [scene, animations]);

  useEffect(() => {
    if (head.current) {
      head.current.rotation.set(0, Math.PI, 0);
      head.current.position.set(0, -0.5, 0);
    }
  }, []);

  useFrame((state, delta) => {
    // Update animation mixer if active
    if (mixer.current) {
      mixer.current.update(delta);
    }

    // Update head rotation to follow cursor
    if (head.current) {
      dummy.lookAt(cursor.x, cursor.y, 1);
      dummy.rotation.y += Math.PI;
      easing.dampQ(head.current.quaternion, dummy.quaternion, 0.15, delta);
    }
  });

  return <primitive object={head.current} />;
}

const HeadRender = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative w-full h-[600px]">
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="animate-pulse bg-gray-300 rounded-full w-40 h-40" />
        </div>
      )}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        id="head"
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <Model onLoaded={() => setLoading(false)} />
      </Canvas>
    </div>
  );
};

export default HeadRender;
