import { useState, useEffect, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { trophiesData } from "../../data";
import { GemTrophy, SHAPE_MAP } from "./placeholders";

type Trophy = typeof trophiesData[number];

// ─── Trophy Slot ───────────────────────────────────────────────
function TrophySlot({ trophy, onSelect }: { trophy: Trophy; onSelect: (t: Trophy) => void }) {
  const [hovered, setHovered] = useState(false);
  const Placeholder = (SHAPE_MAP[trophy.shape] ?? GemTrophy) as React.FC<{ color?: string }>;

  return (
    <div
      onClick={() => onSelect(trophy)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        padding: "14px 10px 16px",
        background: hovered
          ? `linear-gradient(135deg, ${trophy.glowColor}14, rgba(90,55,18,0.7))`
          : "linear-gradient(135deg, rgba(60,35,10,0.55), rgba(40,22,6,0.65))",
        border: `2px solid ${hovered ? trophy.glowColor : "rgba(170,120,50,0.35)"}`,
        boxShadow: hovered
          ? `0 0 24px ${trophy.glowColor}44, inset 0 0 12px rgba(0,0,0,0.25)`
          : "inset 2px 2px 6px rgba(0,0,0,0.5), inset -1px -1px 0 rgba(200,150,60,0.06)",
        clipPath: "polygon(6px 0,calc(100% - 6px) 0,100% 6px,100% calc(100% - 6px),calc(100% - 6px) 100%,6px 100%,0 calc(100% - 6px),0 6px)",
        transition: "all 0.18s",
        userSelect: "none",
      }}
    >
      {/* 3D Trophy */}
      <div style={{ width: "100%", height: 180, position: "relative" }}>
        <Canvas
          camera={{ position: [0, 0, 2.6], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.5} color="#FFE8CC" />
          <pointLight position={[3, 4, 3]} intensity={24} color="#FFE4B5" />
          <pointLight position={[-2, -2, 2]} intensity={12} color={trophy.glowColor} />
          <Suspense fallback={null}>
            <Placeholder color={trophy.glowColor} />
          </Suspense>
        </Canvas>
      </div>

      {/* Divider */}
      <div style={{
        width: "80%", height: 1,
        background: hovered
          ? `linear-gradient(to right, transparent, ${trophy.glowColor}55, transparent)`
          : "rgba(163,100,40,0.22)",
        transition: "background 0.2s",
      }} />

      {/* Name */}
      <div style={{
        fontFamily: "var(--font-headings, 'Press Start 2P', monospace)",
        fontSize: "clamp(0.3rem, 0.85vw, 0.42rem)",
        color: hovered ? trophy.glowColor : "var(--text-dim, #C9A96E)",
        textAlign: "center",
        lineHeight: 1.7,
        letterSpacing: "0.04em",
        transition: "color 0.18s",
      }}>
        {trophy.name}
      </div>

      {/* Date */}
      <div style={{
        fontFamily: "var(--font-vt323, VT323, monospace)",
        fontSize: "0.9rem",
        color: "var(--text-muted, rgba(160,120,60,0.6))",
        letterSpacing: "0.06em",
      }}>
        {trophy.date}
      </div>
    </div>
  );
}

// ─── Trophy Modal ──────────────────────────────────────────────
function TrophyModal({ trophy, onClose }: { trophy: Trophy; onClose: () => void }) {
  const Placeholder = (SHAPE_MAP[trophy.shape] ?? GemTrophy) as React.FC<{ color?: string }>;
  const isNarrow = typeof window !== "undefined" && window.innerWidth < 640;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 500,
        background: "rgba(0,0,0,0.84)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "linear-gradient(135deg, #2D1C0A, #1E1208)",
          border: "2px solid rgba(170,136,80,0.45)",
          boxShadow: `0 0 60px rgba(0,0,0,0.9), 0 0 28px ${trophy.glowColor}2A`,
          maxWidth: 800, width: "100%",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: isNarrow ? "column" : "row",
          overflow: "hidden",
          clipPath: "polygon(8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px),0 8px)",
        }}
      >
        {/* 3D viewer */}
        <div style={{
          width: isNarrow ? "100%" : "42%",
          height: isNarrow ? "240px" : "380px",
          background: "#1A1008",
          flexShrink: 0, position: "relative",
        }}>
          <Canvas camera={{ position: [0, 0, 2.8], fov: 45 }}>
            <ambientLight intensity={0.55} />
            <pointLight position={[3, 3, 3]} intensity={25} color="#FFE4B5" />
            <pointLight position={[-3, -2, 2]} intensity={15} color={trophy.glowColor} />
            <Suspense fallback={null}>
              <Placeholder color={trophy.glowColor} />
            </Suspense>
            <OrbitControls
              enablePan={false}
              enableDamping dampingFactor={0.05}
              minDistance={1.5} maxDistance={5.5}
              autoRotate autoRotateSpeed={0.8}
            />
          </Canvas>
          <div style={{
            position: "absolute", bottom: 8, left: 0, right: 0,
            textAlign: "center",
            fontFamily: "var(--font-headings, monospace)",
            fontSize: "5.5px", color: "rgba(200,160,80,0.38)",
            pointerEvents: "none", letterSpacing: "0.04em",
          }}>DRAG TO ROTATE · SCROLL TO ZOOM</div>
        </div>

        {/* Info */}
        <div style={{
          flex: 1,
          padding: isNarrow ? "20px" : "28px 28px 28px 24px",
          display: "flex", flexDirection: "column", gap: 14,
          overflowY: "auto", position: "relative",
        }}>
          <button onClick={onClose} style={{
            position: "absolute", top: 12, right: 14,
            background: "transparent", border: "none",
            color: "var(--text-muted, rgba(180,140,60,0.6))", fontSize: "0.7rem",
            fontFamily: "var(--font-headings, monospace)", cursor: "pointer",
          }}>✕</button>

          <div style={{ fontFamily: "var(--font-headings)", fontSize: "0.38rem", color: "var(--gold, #F5C542)", letterSpacing: "0.1em", marginTop: 4 }}>
            ACHIEVEMENT UNLOCKED
          </div>
          <h2 style={{ fontFamily: "var(--font-headings)", fontSize: "0.65rem", color: trophy.glowColor, lineHeight: 1.8, margin: 0 }}>
            {trophy.name}
          </h2>
          <div style={{ fontFamily: "var(--font-primary)", fontSize: "0.83rem", color: "var(--text-dim)", lineHeight: 1.4 }}>
            {trophy.subtitle}
          </div>
          <div style={{ fontFamily: "var(--font-vt323)", fontSize: "1rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
            {trophy.date}
          </div>
          <div style={{ borderTop: "1px solid rgba(170,136,80,0.18)" }} />
          <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.87rem", color: "var(--text-dim)", lineHeight: 1.75, margin: 0 }}>
            {trophy.description}
          </p>

          {trophy.tags && trophy.tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {trophy.tags.map((tag) => (
                <span key={tag} className="mc-tag" style={{ color: trophy.glowColor, borderColor: `${trophy.glowColor}55`, background: `${trophy.glowColor}12` }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Cabinet (full-screen) ────────────────────────────────
export default function TrophyCabinet() {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [doorsGone, setDoorsGone] = useState(false);
  const [selected, setSelected] = useState<Trophy | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setDoorsOpen(true), 350);
    const t2 = setTimeout(() => setDoorsGone(true), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleClose = useCallback(() => setSelected(null), []);

  const doorCommon: React.CSSProperties = {
    position: "absolute",
    top: 0, height: "100%", width: "50%",
    transition: "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
    background: [
      "repeating-linear-gradient(90deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 56px, rgba(0,0,0,0.22) 56px, rgba(0,0,0,0.22) 58px)",
      "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 32px)",
      "linear-gradient(160deg, #7A4820 0%, #5C3618 40%, #4A2C10 65%, #6B4020 100%)",
    ].join(", "),
  };

  return (
    // The whole page IS the cabinet
    <div style={{
      minHeight: "100vh",
      boxSizing: "border-box",
      border: "10px solid #6B4018",
      borderTop: "14px solid #8B5620",
      borderBottom: "14px solid #4A2C0E",
      background: "linear-gradient(180deg, #2D1C0A 0%, #241508 50%, #1E1206 100%)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    }}>

      {/* ── Cabinet top beam ── */}
      <div style={{
        background: "linear-gradient(to bottom, #4A2C0E, #3A2008)",
        borderBottom: "4px solid #AA8850",
        borderTop: "2px solid rgba(200,160,80,0.2)",
        padding: "18px 24px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
      }}>
        <a href="/" style={{
          fontFamily: "var(--font-headings)", fontSize: "0.4rem",
          color: "var(--grass-bright, #A3D977)", textDecoration: "none",
          letterSpacing: "0.05em", flexShrink: 0,
        }}>← HOME</a>

        <div style={{ flex: 1, textAlign: "center" }}>
          <h1 style={{
            fontFamily: "var(--font-headings)",
            fontSize: "clamp(0.7rem, 2.5vw, 1.3rem)",
            color: "var(--gold, #F5C542)",
            letterSpacing: "0.1em",
            margin: 0,
            textShadow: "0 0 20px rgba(245,197,66,0.45), 0 2px 0 rgba(0,0,0,0.6)",
          }}>
            🏆 TROPHY CABINET
          </h1>
          <p style={{
            fontFamily: "var(--font-vt323)",
            fontSize: "1rem",
            color: "rgba(200,160,80,0.55)",
            letterSpacing: "0.16em",
            margin: "4px 0 0",
          }}>
            MILESTONES · ACHIEVEMENTS · HISTORY
          </p>
        </div>

        {/* Balance spacer */}
        <div style={{ width: 60, flexShrink: 0 }} />
      </div>

      {/* ── Inventory interior ── */}
      <div style={{
        flex: 1,
        padding: "28px 20px 40px",
        background: "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.22) 100%)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
          gap: 16,
          maxWidth: 1060,
          margin: "0 auto",
        }}>
          {trophiesData.map((t) => (
            <TrophySlot key={t.id} trophy={t} onSelect={setSelected} />
          ))}
        </div>

        <p style={{
          textAlign: "center",
          fontFamily: "var(--font-headings)",
          fontSize: "0.33rem",
          color: "rgba(163,100,40,0.38)",
          marginTop: 36,
          letterSpacing: "0.1em",
        }}>CLICK A TROPHY TO INSPECT · 3D MODELS COMING SOON</p>
      </div>

      {/* ── Bottom wood beam ── */}
      <div style={{
        height: 20,
        background: "linear-gradient(to bottom, #3A2008, #2A1608)",
        borderTop: "4px solid #AA8850",
      }} />

      {/* ── Sliding doors (fixed over full viewport) ── */}
      {!doorsGone && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, pointerEvents: doorsOpen ? "none" : "all", overflow: "hidden" }}>
          {/* Left door */}
          <div style={{
            ...doorCommon,
            left: 0,
            transform: `translateX(${doorsOpen ? "-100%" : "0"})`,
            borderRight: "5px solid #AA8850",
          }}>
            {/* Panel grooves */}
            {[30, 70].map((pct, i) => (
              <div key={i} style={{
                position: "absolute", left: 14, right: 14, top: `${pct}%`,
                height: 8,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(255,255,255,0.05), rgba(0,0,0,0.4))",
                transform: "translateY(-50%)",
              }} />
            ))}
            {/* Hinges */}
            {[15, 50, 85].map((pct, i) => (
              <div key={i} style={{
                position: "absolute", left: 0, top: `${pct}%`,
                transform: "translateY(-50%)",
                width: 18, height: 28,
                background: "linear-gradient(to right, #9A7830, #C8A040, #9A7830)",
              }} />
            ))}
            {/* Handle */}
            <div style={{
              position: "absolute", right: 18, top: "50%",
              transform: "translateY(-50%)",
              width: 14, height: 50,
              background: "linear-gradient(to bottom, #C8A040, #8A6510, #C8A040)",
              borderRadius: 3,
              boxShadow: "inset -2px 0 4px rgba(0,0,0,0.5)",
            }} />
          </div>

          {/* Right door */}
          <div style={{
            ...doorCommon,
            right: 0,
            transform: `translateX(${doorsOpen ? "100%" : "0"})`,
            borderLeft: "5px solid #AA8850",
          }}>
            {[30, 70].map((pct, i) => (
              <div key={i} style={{
                position: "absolute", left: 14, right: 14, top: `${pct}%`,
                height: 8,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(255,255,255,0.05), rgba(0,0,0,0.4))",
                transform: "translateY(-50%)",
              }} />
            ))}
            {[15, 50, 85].map((pct, i) => (
              <div key={i} style={{
                position: "absolute", right: 0, top: `${pct}%`,
                transform: "translateY(-50%)",
                width: 18, height: 28,
                background: "linear-gradient(to left, #9A7830, #C8A040, #9A7830)",
              }} />
            ))}
            <div style={{
              position: "absolute", left: 18, top: "50%",
              transform: "translateY(-50%)",
              width: 14, height: 50,
              background: "linear-gradient(to bottom, #C8A040, #8A6510, #C8A040)",
              borderRadius: 3,
              boxShadow: "inset 2px 0 4px rgba(0,0,0,0.5)",
            }} />
          </div>
        </div>
      )}

      {selected && <TrophyModal trophy={selected} onClose={handleClose} />}
    </div>
  );
}
