import Head from "next/head";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import { Nav as Navbar } from "../components/layout";
import Bg from "../components/layout/Background";

const TrophyCabinet = dynamic(
  () => import("../components/trophies/TrophyCabinet"),
  {
    loading: () => (
      <div
        style={{
          minHeight: "100vh",
          background: "#0D0D12",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "0.55rem",
            color: "#78B04A",
            letterSpacing: "0.1em",
            opacity: 0.6,
          }}
        >
          LOADING CABINET...
        </div>
      </div>
    ),
  },
);

export default function TrophiesPage() {
  return (
    <>
      <Head>
        <title>Trophy Cabinet | Keyyard</title>
        <meta
          name="description"
          content="Achievements, milestones, and recognition earned across Minecraft Bedrock development and the modding community. Microsoft Partner, DLC Developer, and Bedrock OSS Project Lead."
        />
        <link rel="canonical" href="https://keyyard.xyz/trophies" />
        <meta property="og:title" content="Trophy Cabinet | Keyyard" />
        <meta property="og:description" content="Milestones, achievements, and career highlights from Keyyard — Minecraft Bedrock Developer." />
        <meta property="og:url" content="https://keyyard.xyz/trophies" />
        <meta property="og:image" content="https://keyyard.xyz/keyyard.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Bg />
      <Analytics />
      <TrophyCabinet />
    </>
  );
}
