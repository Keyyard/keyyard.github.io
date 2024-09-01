import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { easing } from "maath";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { AnimationMixer } from "three";

function Model() {
  const { scene, animations } = useGLTF("../src/assets/myHead.gltf");
  const head = useRef(scene);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  // State to store the x and y coordinates of the mouse cursor
  const [dummy] = useState(() => new THREE.Object3D());
  // Dummy object used for calculating the lookAt rotation
  // The method is create a new Object3D instance and store it in the dummy state
  // Our model will look at this dummy object
  const mixer = useRef<THREE.AnimationMixer | null>(null);
  useEffect(() => {
    console.log(scene);
    console.log(animations);
    const handleMouseMove = (event: MouseEvent) => {
      setCursor({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 0.5,
      });
    };
    const handleClick = (event: MouseEvent) => {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[1]);
      action.setLoop(THREE.LoopOnce, 1); // Set the loop mode to play once
      action.clampWhenFinished = true; // Stop at the last frame
      action.play();
      console.log("Head clicked");
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    // Add mouse move event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
    // Cleanup event listener on unmount
  }, [scene, animations]);

  useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer.current) {
        mixer.current.update(0.01); // Update the mixer with a small delta time
      }
    };
    animate();
  }, []);
  useEffect(() => {
    if (head.current) {
      head.current.rotation.set(0, Math.PI, 0);
      // Set initial rotation of the head
      head.current.position.set(0, -0.5, 0);
      // Set initial position of the head
    }
  }, []);
  // constantly update

  useFrame((state, dt) => {
    dummy.lookAt(cursor.x, cursor.y, 1); // Make dummy look at the cursor position
    dummy.rotation.y += Math.PI; // Maintain the initial y-axis rotation
    easing.dampQ(head.current.quaternion, dummy.quaternion, 0.15, dt); // Smoothly interpolate the head's rotation to match the dummy's rotation
  });
  // useFrame is a hook that runs on every frame.
  // dt is the time delta between the current frame and the previous frame

  return <primitive object={head.current} />;
  // The <primitive> component is used to render a raw Three.js object
}
const HeadRender = () => {
  return (
    <>
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} id="head">
        <ambientLight intensity={0.5}/>
        <Model />
      </Canvas>
    </>
  );
};

export default HeadRender;
