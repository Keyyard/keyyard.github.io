export const reactStrictMode = false;
export const productionBrowserSourceMaps = true;
import createBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/s2VfQr69uz",
        permanent: false,
      },
    ];
  },
});
