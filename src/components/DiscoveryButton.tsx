export default function DiscoveryButton() {
  return (
    <a
      href="/discovery"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Discover Keyyard in a new tab"
      className="fixed top-4 left-4 z-50 flex items-center gap-3 rounded-full bg-black bg-opacity-40 hover:bg-opacity-60 transition px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-3"
      title="Discover Keyyard"
      style={{ backdropFilter: "blur(6px)" }}
    >
      <img
        src="/assets/compass.gif"
        alt="Compass"
        className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain rounded-full"
        style={{ mixBlendMode: "screen" }}
      />
      <span className="hidden md:inline-block text-sm md:text-base lg:text-lg font-semibold">
        Discover Keyyard
      </span>
    </a>
  );
}
