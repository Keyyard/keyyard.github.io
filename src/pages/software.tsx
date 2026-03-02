import { Suspense, lazy } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { softwareProjects, softwarePageMeta } from "../softwareData";
import Bg from "../components/layout/Background";

const SafeImage = lazy(() => import("../components/ui/SafeImage"));

const LINK_COLORS: Record<string, { bg: string; color: string }> = {
  "GitHub":    { bg: "#3D2E55", color: "#E2D4F0" },
  "Live App":  { bg: "#0D2A3D", color: "#7DD8F8" },
  "Product":   { bg: "#0D2A3D", color: "#7DD8F8" },
  "NPM":       { bg: "#5C1A1A", color: "#F5A0A0" },
};
function linkStyle(name: string) {
  return LINK_COLORS[name] ?? { bg: "#252528", color: "#B8A88A" };
}

export default function SoftwarePage() {
  return (
    <>
      <Head>
        <title>Software Projects — Keyyard</title>
        <meta name="description" content="Web apps, tools, and experiments by Keyyard outside the Minecraft ecosystem." />
      </Head>

      <Bg />

      {/* Back link */}
      <div style={{ padding: "24px 32px" }}>
        <a
          href="/"
          style={{
            fontFamily: "var(--font-headings)", fontSize: "0.5rem",
            color: "var(--grass-bright)", letterSpacing: "0.1em",
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
          }}
        >
          ◀ BACK TO PORTFOLIO
        </a>
      </div>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "20px 24px 120px" }}>
        {/* Header */}
        <div style={{ marginBottom: 60, textAlign: "center" }}>
          <h1 style={{
            fontFamily: "var(--font-headings)", fontSize: "clamp(1rem, 3vw, 1.6rem)",
            color: "var(--text-main)", marginBottom: 16,
            textShadow: "3px 3px 0 rgba(0,0,0,0.7)",
          }}>
            {softwarePageMeta.title}
          </h1>
          <p style={{ fontFamily: "var(--font-primary)", fontSize: "1rem", color: "var(--text-dim)", maxWidth: 520, margin: "0 auto" }}>
            {softwarePageMeta.subtitle}
          </p>
          <a
            href={softwarePageMeta.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginTop: 20,
              fontFamily: "var(--font-headings)", fontSize: "0.5rem",
              color: "var(--text-muted)", letterSpacing: "0.1em", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.1)", padding: "8px 16px",
              clipPath: "polygon(0 3px,3px 0,calc(100% - 3px) 0,100% 3px,100% calc(100% - 3px),calc(100% - 3px) 100%,3px 100%,0 calc(100% - 3px))",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            ◆ VIEW ALL ON GITHUB
          </a>
        </div>

        {/* Projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {softwareProjects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: 0,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                clipPath: "polygon(0 4px,4px 0,calc(100% - 4px) 0,100% 4px,100% calc(100% - 4px),calc(100% - 4px) 100%,4px 100%,0 calc(100% - 4px))",
                overflow: "hidden",
              }}
            >
              {/* Image */}
              <div style={{ background: "#0D0D12", overflow: "hidden" }}>
                <Suspense fallback={<div style={{ width: "100%", height: "100%", background: "var(--coal)" }} />}>
                  <SafeImage src={proj.imgs?.[0] ?? ""} alt={proj.title} className="w-full h-full object-cover" />
                </Suspense>
              </div>

              {/* Info */}
              <div style={{ padding: "24px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                  {proj.icon && (
                    <div style={{ width: 32, height: 32, overflow: "hidden", clipPath: "polygon(0 2px,2px 0,calc(100% - 2px) 0,100% 2px,100% calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,0 calc(100% - 2px))", background: "var(--obsidian)", flexShrink: 0 }}>
                      <Suspense fallback={<div style={{ width: "100%", height: "100%", background: "var(--coal)" }} />}>
                        <SafeImage src={proj.icon} alt={proj.title} className="w-full h-full object-cover" />
                      </Suspense>
                    </div>
                  )}
                  <h2 style={{ fontFamily: "var(--font-primary)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-main)" }}>
                    {proj.title}
                  </h2>
                  <span style={{
                    fontFamily: "var(--font-headings)", fontSize: "0.38rem", padding: "3px 8px",
                    background: proj.status === "Live" ? "rgba(120,176,74,0.15)" : "rgba(139,139,139,0.15)",
                    color: proj.status === "Live" ? "var(--grass-glow)" : "var(--stone-light)",
                    border: `1px solid ${proj.status === "Live" ? "rgba(120,176,74,0.3)" : "rgba(139,139,139,0.25)"}`,
                    clipPath: "polygon(0 2px,2px 0,calc(100% - 2px) 0,100% 2px,100% calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,0 calc(100% - 2px))",
                  }}>
                    {proj.status}
                  </span>
                </div>

                <p style={{ fontFamily: "var(--font-vt323)", fontSize: "0.9rem", color: "var(--text-muted)", letterSpacing: "0.05em", marginBottom: 10 }}>
                  {proj.short_info}
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 16 }}>
                  {proj.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {proj.tags.map((tag) => (
                    <span key={tag} className="mc-tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {proj.links.map((l) => {
                    const s = linkStyle(l.name);
                    return (
                      <a key={l.name} href={l.link} target="_blank" rel="noopener noreferrer"
                        className="mc-link-pill" style={{ background: s.bg, color: s.color }}>
                        {l.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
