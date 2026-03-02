import { useEffect, useRef } from "react";
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
      "%c\n" +
      "  ██████╗  ██╗ ██╗ ██╗   ██╗ █████╗ ██████╗ ██████╗  \n" +
      "  ██╔══██╗ ██║ ██║ ╚██╗ ██╔╝██╔══██╗██╔══██╗██╔══██╗ \n" +
      "  ██████╔╝ ██║ ██║  ╚████╔╝ ███████║██████╔╝██║  ██║ \n" +
      "  ██╔═══╝  ██║ ██║   ╚██╔╝  ██╔══██║██╔══██╗██║  ██║ \n" +
      "  ██║      ███████╗   ██║   ██║  ██║██║  ██║██████╔╝ \n" +
      "  ╚═╝      ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  \n" +
      "\n" +
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

  return (
    <>
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
