import { motion } from "framer-motion";
import HeadRender from "./layout/MyHead";
import Bg from "./layout/Background";
import { introductionText } from "../data";

export function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center min-h-[860px]">
      <Bg />
      <div className="flex flex-col justify-center">
        <span className="absolute pt-4 flex border w-fit bg-white blur-xl bg-clip-text text-4xl box-content font-extrabold text-transparent text-center select-none">
          Keyyard - Hieu
        </span>
        <h1
          className="relative top-0 w-fit h-auto pt-4 flex bg-white bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto"
          style={{ fontSize: "2.25rem" }}
        >
          Keyyard - Hieu
        </h1>
        <h2 className="text-center leading-3 mt-2">
          Minecraft Add-on Developer & Fullstack Developer
        </h2>
      </div>
      <motion.div
        className="flex w-[50vw] h-[70vh] absolute"
        id="MyHead"
        drag
        dragConstraints={{
          top: -50,
          left: -100,
          right: 25,
          bottom: 50,
        }}
      >
        <HeadRender />
      </motion.div>
      <div className="pt-4 flex w-[50vw] h-[55vh]" id="head" />
      <div className="flex flex-col items-center justify-items-center p-4 text-[15px]">
        <div className="text-start mt-32 m:mt-20">
          {introductionText.map((text, index) => (
            <p key={index} className="text-lg">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
