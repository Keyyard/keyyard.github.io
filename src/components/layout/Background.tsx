import Waves from "./Waves.tsx";

const Bg = () => {
  return (
    <div className="absolute top-0 left-0 z-[-1] w-full h-full">
      <Waves
        lineColor="#3b3b3b"
        backgroundColor="#262626"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
    </div>
  );
};

export default Bg;
