import { motion } from "framer-motion";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import HeadRender from "./MyHead";
import Bg from "./bg";
export function Hero() {
  useEffect(() => {
    toast((t) => (
      <span className="justify-items-center items-center">
        Feel free to interact with my head clone down there! <br />
        (drag it around, click on it, etc.) <br />
        <button
          className="bg-gray-200 p-2 my-2 hover:border-gray-200 hover:bg-gray-100"
          onClick={() => toast.dismiss(t.id)}
        >
          Alright!
        </button>
      </span>
    ));
  }, []);
  return (
    <section id="hero" className="flex flex-col items-center min-h-[100vh]">
      <Toaster />
      <Bg />
      <div className="flex flex-col justify-center">
        <span className="absolute pt-4 flex border w-fit bg-white blur-xl bg-clip-text text-4xl box-content font-extrabold text-transparent text-center select-none">
          I&#39;m Hieu
        </span>
        <h1 className="relative top-0 w-fit h-auto pt-4 flex bg-white bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto">
          I&#39;m Hieu
        </h1>
        <h2 className="text-center leading-3">Also known as Keyyard</h2>
      </div>
      <motion.div
        className="flex w-[50vw] h-[70vh] absolute"
        id="MyHead"
        drag
        dragConstraints={{
          top: -50,
          left: -200,
          right: 200,
          bottom: 50,
        }}
      >
        <HeadRender />
      </motion.div>
      <div className="pt-4 flex w-[50vw] h-[50vh]" id="head"></div>
      <div className="flex flex-col items-center justify-items-center py-4 text-[15px]">
        <div className="text-start mt-32 md:mt-20">
          <p className="text-lg">Hi, I&#39;m Keyyard.</p>
          <p className="text-lg">
            Over the last years, I have been an Official Minecraft Marketplace
            developer.
          </p>
          <p className="text-lg">
            I&#39;m fancy of turning my fantasies into reality, and yours too!
          </p>
          <p className="text-sm italic">
            <a href="https://blogs.keyyard.xyz">
              Sometimes I write blogs, check it out
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
