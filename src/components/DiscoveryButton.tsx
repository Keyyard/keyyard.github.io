export default function DiscoveryButton() {
  return (
    <a
      href="/discovery"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Discover Keyyard in a new tab"
      className="fixed bottom-4 left-4 lg:top-4 lg:left-4 lg:bottom-auto lg:right-auto z-50 flex items-center gap-3 rounded-full bg-black bg-opacity-40 hover:bg-opacity-60 transition px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
      title="Discover Keyyard"
      style={{ backdropFilter: "blur(6px)" }}
    >
      <img
        src="/assets/compass.gif"
        alt="Compass"
        className="w-10 h-10 lg:w-14 lg:h-14 object-contain rounded-full"
        style={{ mixBlendMode: "screen" }}
      />
      <span className="hidden lg:inline-block text-sm md:text-base lg:text-lg font-semibold">
        Discover Keyyard
      </span>
    </a>
  );
}
