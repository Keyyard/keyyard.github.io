import Head from "next/head";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import { Nav as Navbar } from "../components/layout";
import Bg from "../components/layout/Background";

const TrophyCabinet = dynamic(
  () => import("../components/trophies/TrophyCabinet"),
  { ssr: false, loading: () => (
    <div style={{
      minHeight: "100vh", background: "#0D0D12",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: "0.55rem", color: "#78B04A",
        letterSpacing: "0.1em", opacity: 0.6,
      }}>
        LOADING CABINET...
      </div>
    </div>
  )}
);

export default function TrophiesPage() {
  return (
    <>
      <Head>
        <title>Trophy Cabinet · Keyyard</title>
        <meta name="description" content="Milestones, achievements, and history — Keyyard's Trophy Cabinet featuring 3D trophies for each career milestone." />
      </Head>
      <Bg />
      <Analytics />
      <TrophyCabinet />
    </>
  );
}
