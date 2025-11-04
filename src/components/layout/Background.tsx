import { memo } from "react";

const Bg = memo(() => {
  return (
    <div className="absolute top-0 left-0 z-[-1] w-full h-full">
    </div>
  );
});

Bg.displayName = 'Background';

export default Bg;
