import { useEffect, useRef } from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import toast, { Toaster } from "react-hot-toast";
import {
  Hero,
  About,
  Experiences,
  MinecraftProjects,
  MinecraftCommunity,
  Contact,
} from "../components/sections";
import DiscoveryButton from "../components/DiscoveryButton";
import { Nav as Navbar } from "../components/layout";
import Bg from "../components/layout/Background";

const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function Home() {
  const konamiIndex = useRef(0);
  const achievementShown = useRef(false);

  // Console easter egg
  useEffect(() => {
    console.log(
      "  ⛏  Welcome to my portfolio, Adventurer!  ⛏\n" +
      "  Try the Konami Code: ↑↑↓↓←→←→BA\n\n",
      "color:#A3D977; font-family:monospace; font-size:11px; background:#0D0D12; padding:8px;"
    );
    console.log(
      "%c  🟩 Minecraft Bedrock Dev since 2018 | keyyard.xyz",
      "color:#78B04A; font-family:monospace; font-size:12px;"
    );
  }, []);

  // Konami code easter egg
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === KONAMI[konamiIndex.current]) {
        konamiIndex.current += 1;
        if (konamiIndex.current === KONAMI.length) {
          konamiIndex.current = 0;
          if (!achievementShown.current) {
            achievementShown.current = true;
            toast.custom(
              (t) => (
                <div style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: "#1A1A1F",
                  border: "2px solid #F5C542",
                  boxShadow: "0 0 20px rgba(245,197,66,0.4), 0 4px 24px rgba(0,0,0,0.7)",
                  padding: "14px 20px",
                  opacity: t.visible ? 1 : 0,
                  transition: "opacity 0.3s",
                  clipPath: "polygon(8px 0%,calc(100% - 8px) 0%,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0% calc(100% - 8px),0% 8px)",
                  maxWidth: 340,
                }}>
                  <span style={{ fontSize: 28 }}>🏆</span>
                  <div>
                    <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.42rem", color: "#F5C542", letterSpacing: "0.5px", marginBottom: 5 }}>
                      ACHIEVEMENT UNLOCKED
                    </div>
                    <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.55rem", color: "#F0EAD6" }}>
                      Full Stack Crafter
                    </div>
                  </div>
                </div>
              ),
              { duration: 5000, position: "top-center" }
            );
          }
        }
      } else {
        konamiIndex.current = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Birthday toast — September 30, 2004
  useEffect(() => {
    const now = new Date();
    if (now.getMonth() !== 8 || now.getDate() !== 30) return;
    const key = `bday-toast-${now.getFullYear()}`;
    if (localStorage.getItem(key)) return;
    localStorage.setItem(key, "1");
    const age = now.getFullYear() - 2004;
    const tweetText = encodeURIComponent(`Happy Birthday @keyyard! 🎂🎉 You leveled up to LVL ${age}!`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    const igUrl = "https://www.instagram.com/keyyard/";
    const timer = setTimeout(() => {
      toast.custom(
        (t) => (
          <div style={{
            display: "flex", flexDirection: "column", gap: 12,
            background: "#1A1A1F",
            border: "2px solid #4ECDC4",
            boxShadow: "0 0 24px rgba(78,205,196,0.45), 0 4px 24px rgba(0,0,0,0.8)",
            padding: "16px 20px",
            opacity: t.visible ? 1 : 0,
            transition: "opacity 0.3s",
            clipPath: "polygon(8px 0%,calc(100% - 8px) 0%,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0% calc(100% - 8px),0% 8px)",
            maxWidth: 360,
            position: "relative",
          }}>
            <button
              onClick={() => toast.dismiss(t.id)}
              style={{ position: "absolute", top: 8, right: 10, background: "transparent", color: "#7A6A55", fontSize: "0.65rem", fontFamily: "'Press Start 2P',monospace", cursor: "pointer", padding: 0, border: "none" }}
            >✕</button>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 34 }}>🎂</span>
              <div>
                <div style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "0.38rem", color: "#4ECDC4", letterSpacing: "0.5px", marginBottom: 4 }}>
                  ACHIEVEMENT GET!
                </div>
                <div style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "0.6rem", color: "#F0EAD6" }}>
                  Happy Birthday!
                </div>
                <div style={{ fontFamily: "VT323,monospace", fontSize: "1rem", color: "#A3D977", marginTop: 3 }}>
                  You leveled up to LVL {age}!
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "'Press Start 2P',monospace", fontSize: "0.38rem",
                padding: "7px 10px",
                background: "rgba(29,161,242,0.12)",
                border: "1px solid rgba(29,161,242,0.5)",
                color: "#1DA1F2",
                textDecoration: "none",
                clipPath: "polygon(2px 0,calc(100% - 2px) 0,100% 2px,100% calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,0 calc(100% - 2px),0 2px)",
              }}>𝕏 Tweet Wishes</a>
              <a href={igUrl} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "'Press Start 2P',monospace", fontSize: "0.38rem",
                padding: "7px 10px",
                background: "rgba(225,48,108,0.12)",
                border: "1px solid rgba(225,48,108,0.5)",
                color: "#E1306C",
                textDecoration: "none",
                clipPath: "polygon(2px 0,calc(100% - 2px) 0,100% 2px,100% calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,0 calc(100% - 2px),0 2px)",
              }}>📸 Instagram</a>
            </div>
          </div>
        ),
        { duration: Infinity, position: "top-center" }
      );
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Keyyard | Minecraft Bedrock Developer</title>
        <meta
          name="description"
          content="Official Website of Keyyard, a Minecraft Bedrock Developer since 2018. Exploring high-quality mods, addons, and marketplace content like Cut the Rope × Minecraft DLC."
        />
        <link rel="canonical" href="https://keyyard.xyz/" />
      </Head>
      <Bg />
      <Toaster />
      {/* <DiscoveryButton /> */}
      <Analytics />
      <Hero />
      <About />
      <Experiences />
      <MinecraftProjects />
      <MinecraftCommunity />
      <Contact />
      <Navbar />
    </>
  );
}
