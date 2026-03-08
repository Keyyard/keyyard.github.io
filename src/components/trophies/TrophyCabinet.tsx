import { useState, useEffect, useCallback } from "react";
import { trophiesData } from "../../data";

type Trophy = (typeof trophiesData)[number];

// ─── Trophy Slot ───────────────────────────────────────────────
function TrophySlot({
  trophy,
  onSelect,
}: {
  trophy: Trophy;
  onSelect: (t: Trophy) => void;
}) {
  const [hovered, setHovered] = useState(false);

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
        padding: "20px 14px 18px",
        background: hovered
          ? `linear-gradient(135deg, ${trophy.glowColor}10, rgba(255,255,255,0.06))`
          : "rgba(255,255,255,0.03)",
        border: `2px solid ${hovered ? trophy.glowColor : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered
          ? `0 0 24px ${trophy.glowColor}33, 0 4px 20px rgba(0,0,0,0.5)`
          : "0 2px 12px rgba(0,0,0,0.4)",
        clipPath:
          "polygon(6px 0,calc(100% - 6px) 0,100% 6px,100% calc(100% - 6px),calc(100% - 6px) 100%,6px 100%,0 calc(100% - 6px),0 6px)",
        transition: "all 0.18s",
        userSelect: "none",
      }}
    >
      {/* 2D Trophy image */}
      <div
        style={{
          width: "100%",
          height: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: hovered
            ? `radial-gradient(ellipse at center, ${trophy.glowColor}18 0%, transparent 70%)`
            : "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 70%)",
          transition: "background 0.2s",
          borderRadius: 2,
        }}
      >
        <img
          src={trophy.image}
          alt={trophy.name}
          style={{
            width: 96,
            height: 96,
            objectFit: "contain",
            imageRendering: "pixelated",
            filter: hovered
              ? `drop-shadow(0 0 12px ${trophy.glowColor}99)`
              : "none",
            transition: "filter 0.18s, transform 0.18s",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        />
      </div>

      {/* Divider */}
      <div
        style={{
          width: "80%",
          height: 1,
          background: hovered
            ? `linear-gradient(to right, transparent, ${trophy.glowColor}66, transparent)`
            : "rgba(255,255,255,0.08)",
          transition: "background 0.2s",
        }}
      />

      {/* Name badge */}
      <div
        style={{
          fontFamily: "var(--font-headings, 'Press Start 2P', monospace)",
          fontSize: "clamp(0.3rem, 0.85vw, 0.42rem)",
          color: hovered ? trophy.glowColor : "var(--text-dim, #B8A88A)",
          textAlign: "center",
          lineHeight: 1.7,
          letterSpacing: "0.04em",
          transition: "color 0.18s",
        }}
      >
        {trophy.name}
      </div>

      {/* Date */}
      <div
        style={{
          fontFamily: "var(--font-vt323, VT323, monospace)",
          fontSize: "0.9rem",
          color: "var(--text-muted, #7A6A55)",
          letterSpacing: "0.06em",
        }}
      >
        {trophy.date}
      </div>
    </div>
  );
}

// ─── Trophy Modal ──────────────────────────────────────────────
function TrophyModal({
  trophy,
  onClose,
}: {
  trophy: Trophy;
  onClose: () => void;
}) {
  const isNarrow = typeof window !== "undefined" && window.innerWidth < 640;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        background: "rgba(0,0,0,0.84)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background:
            "linear-gradient(135deg, var(--coal, #1A1A1F), var(--obsidian, #0D0D12))",
          border: `2px solid ${trophy.glowColor}55`,
          boxShadow: `0 0 60px rgba(0,0,0,0.9), 0 0 28px ${trophy.glowColor}22`,
          maxWidth: 800,
          width: "100%",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: isNarrow ? "column" : "row",
          overflow: "hidden",
          clipPath:
            "polygon(8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px),0 8px)",
        }}
      >
        {/* 2D Trophy image panel */}
        <div
          style={{
            width: isNarrow ? "100%" : "42%",
            height: isNarrow ? "220px" : "360px",
            background: `radial-gradient(ellipse at center, ${trophy.glowColor}14 0%, rgba(13,13,18,0.9) 70%)`,
            borderRight: isNarrow ? "none" : `1px solid ${trophy.glowColor}22`,
            borderBottom: isNarrow ? `1px solid ${trophy.glowColor}22` : "none",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={trophy.image}
            alt={trophy.name}
            style={{
              width: isNarrow ? 120 : 160,
              height: isNarrow ? 120 : 160,
              objectFit: "contain",
              imageRendering: "pixelated",
              filter: `drop-shadow(0 0 24px ${trophy.glowColor}88)`,
            }}
          />
        </div>

        {/* Info panel */}
        <div
          style={{
            flex: 1,
            padding: isNarrow ? "20px" : "28px 28px 28px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            overflowY: "auto",
            position: "relative",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 12,
              right: 14,
              background: "transparent",
              border: "none",
              color: "var(--text-muted, #7A6A55)",
              fontSize: "1.5rem",
              fontFamily: "var(--font-headings, monospace)",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <div
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "0.38rem",
              color: "var(--gold, #F5C542)",
              letterSpacing: "0.1em",
              marginTop: 4,
            }}
          >
            ACHIEVEMENT UNLOCKED
          </div>
          <h2
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "0.65rem",
              color: trophy.glowColor,
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {trophy.name}
          </h2>
          <div
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "0.83rem",
              color: "var(--text-dim)",
              lineHeight: 1.4,
            }}
          >
            {trophy.subtitle}
          </div>
          <div
            style={{
              fontFamily: "var(--font-vt323)",
              fontSize: "1rem",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
            }}
          >
            {trophy.date}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
          <p
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "0.87rem",
              color: "var(--text-dim)",
              lineHeight: 1.75,
              margin: 0,
              whiteSpace: "pre-wrap",
            }}
          >
            {trophy.description}
          </p>

          {trophy.link && (
            <a
              href={trophy.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mc-link-pill"
              style={{
                background: `${trophy.glowColor}18`,
                color: trophy.glowColor,
                alignSelf: "flex-start",
              }}
            >
              View →
            </a>
          )}

          {trophy.tags && trophy.tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {trophy.tags.map((tag) => (
                <span
                  key={tag}
                  className="mc-tag"
                  style={{
                    color: trophy.glowColor,
                    borderColor: `${trophy.glowColor}55`,
                    background: `${trophy.glowColor}12`,
                  }}
                >
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

// ─── Main Cabinet ──────────────────────────────────────────────
export default function TrophyCabinet() {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [doorsGone, setDoorsGone] = useState(false);
  const [selected, setSelected] = useState<Trophy | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setDoorsOpen(true), 350);
    const t2 = setTimeout(() => setDoorsGone(true), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleClose = useCallback(() => setSelected(null), []);

  const doorCommon: React.CSSProperties = {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "50%",
    transition: "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
    background: [
      "repeating-linear-gradient(90deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 56px, rgba(0,0,0,0.18) 56px, rgba(0,0,0,0.18) 58px)",
      "repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 32px)",
      "linear-gradient(160deg, #1A1A24 0%, #131318 40%, #0D0D12 65%, #1A1A24 100%)",
    ].join(", "),
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        boxSizing: "border-box",
        background: "var(--obsidian, #0D0D12)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          borderBottom: "2px solid rgba(255,255,255,0.06)",
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "0.8rem",
            color: "var(--grass-bright, #78B04A)",
            textDecoration: "none",
            letterSpacing: "0.05em",
            flexShrink: 0,
          }}
        >
          BACK
        </a>

        <div style={{ flex: 1, textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(0.7rem, 2.5vw, 1.3rem)",
              color: "var(--gold, #F5C542)",
              letterSpacing: "0.1em",
              margin: 0,
              textShadow:
                "0 0 20px rgba(245,197,66,0.4), 0 2px 0 rgba(0,0,0,0.6)",
            }}
          >
            TROPHY CABINET
          </h1>
          <p
            style={{
              fontFamily: "var(--font-vt323)",
              fontSize: "1rem",
              color: "var(--text-muted, #7A6A55)",
              letterSpacing: "0.16em",
              margin: "4px 0 0",
            }}
          >
            Stories behind each milestone
          </p>
        </div>

        <div style={{ width: 60, flexShrink: 0 }} />
      </div>

      {/* ── Trophy grid ── */}
      <div
        style={{
          flex: 1,
          padding: "36px 20px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 16,
            maxWidth: 1060,
            margin: "0 auto",
          }}
        >
          {trophiesData.map((t) => (
            <TrophySlot key={t.id} trophy={t} onSelect={setSelected} />
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            fontFamily: "var(--font-headings)",
            fontSize: "0.33rem",
            color: "rgba(255,255,255,0.18)",
            marginTop: 40,
            letterSpacing: "0.1em",
          }}
        >
          CLICK A TROPHY TO INSPECT
        </p>
      </div>

      {/* ── Sliding doors (intro animation) ── */}
      {!doorsGone && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            pointerEvents: doorsOpen ? "none" : "all",
            overflow: "hidden",
          }}
        >
          {/* Left door */}
          <div
            style={{
              ...doorCommon,
              left: 0,
              transform: `translateX(${doorsOpen ? "-100%" : "0"})`,
              borderRight: "3px solid rgba(120,176,74,0.3)",
            }}
          >
            {[30, 70].map((pct, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: 14,
                  right: 14,
                  top: `${pct}%`,
                  height: 6,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(255,255,255,0.03), rgba(0,0,0,0.5))",
                  transform: "translateY(-50%)",
                }}
              />
            ))}
            {[15, 50, 85].map((pct, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: 0,
                  top: `${pct}%`,
                  transform: "translateY(-50%)",
                  width: 14,
                  height: 24,
                  background:
                    "linear-gradient(to right, #78B04A44, #A3D97766, #78B04A44)",
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                width: 10,
                height: 44,
                background:
                  "linear-gradient(to bottom, #78B04A, #4A7030, #78B04A)",
                borderRadius: 2,
              }}
            />
          </div>

          {/* Right door */}
          <div
            style={{
              ...doorCommon,
              right: 0,
              transform: `translateX(${doorsOpen ? "100%" : "0"})`,
              borderLeft: "3px solid rgba(120,176,74,0.3)",
            }}
          >
            {[30, 70].map((pct, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: 14,
                  right: 14,
                  top: `${pct}%`,
                  height: 6,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(255,255,255,0.03), rgba(0,0,0,0.5))",
                  transform: "translateY(-50%)",
                }}
              />
            ))}
            {[15, 50, 85].map((pct, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  right: 0,
                  top: `${pct}%`,
                  transform: "translateY(-50%)",
                  width: 14,
                  height: 24,
                  background:
                    "linear-gradient(to left, #78B04A44, #A3D97766, #78B04A44)",
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                width: 10,
                height: 44,
                background:
                  "linear-gradient(to bottom, #78B04A, #4A7030, #78B04A)",
                borderRadius: 2,
              }}
            />
          </div>
        </div>
      )}

      {selected && <TrophyModal trophy={selected} onClose={handleClose} />}
    </div>
  );
}
