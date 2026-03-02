import { memo } from "react";

/** Full-bleed background: pixel grid + subtle noise. Applied once globally. */
const Bg = memo(() => {
  return (
    <div
      className="fixed inset-0 z-[-1] pointer-events-none pixel-grid"
      aria-hidden="true"
    />
  );
});

Bg.displayName = "Background";

export default Bg;
