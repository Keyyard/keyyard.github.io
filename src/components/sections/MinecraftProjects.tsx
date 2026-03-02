import { useState, Suspense, lazy, useRef, memo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { mcProjects } from "../../data";

const SafeImage = lazy(() => import("../ui/SafeImage"));
const SafeCarousel = lazy(() => import("../ui/SafeCarousel"));

type Project = (typeof mcProjects)[number];

const LINK_COLORS: Record<string, { bg: string; color: string }> = {
  "Github":                { bg: "#3D2E55",  color: "#E2D4F0" },
  "MCPEDL":                { bg: "#1E3D1E",  color: "#A3D977" },
  "CurseForge":            { bg: "#6B3520",  color: "#F5B89A" },
  "Minecraft Marketplace": { bg: "#0D2E22",  color: "#4ECDC4" },
};
function linkStyle(name: string) {
  return LINK_COLORS[name] ?? { bg: "#252528", color: "#B8A88A" };
}

function TypeBadge({ short_info }: { short_info: string }) {
  const isMarket = short_info.toLowerCase().includes("marketplace");
  return (
    <span className={`mc-type-badge ${isMarket ? "mc-type-marketplace" : "mc-type-community"}`}>
      {isMarket ? "⬥ MARKETPLACE" : "⬦ COMMUNITY"}
    </span>
  );
}

function LinkRow({ links }: { links: Project["links"] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {links?.map((l, i) => {
        const s = linkStyle(l.name);
        return (
          <a key={i} href={l.link} target="_blank" rel="noopener noreferrer"
            className="mc-link-pill" style={{ background: s.bg, color: s.color }}>
            {l.name}
          </a>
        );
      })}
    </div>
  );
}

/* ── Featured card: 1 per row, large image ─────────────────── */
function FeaturedCard({ proj }: { proj: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      className="mc-card mc-card-featured"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, minHeight: 280 }}
    >
      {/* Left: image */}
      <div style={{ overflow: "hidden", background: "#0D0D12" }}>
        <Suspense fallback={<div style={{ width: "100%", height: "100%", background: "var(--coal)" }} />}>
          <SafeCarousel images={proj.imgs ?? []} alt={proj.title} className="w-full h-full object-cover" />
        </Suspense>
      </div>
      {/* Right: info */}
      <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            <TypeBadge short_info={proj.short_info} />
            {"downloads" in proj && proj.downloads && (
              <span style={{ fontFamily: "var(--font-headings)", fontSize: "0.38rem", color: "var(--gold)", background: "rgba(245,197,66,0.12)", border: "1px solid rgba(245,197,66,0.3)", padding: "3px 8px", clipPath: "polygon(0 2px,2px 0,calc(100% - 2px) 0,100% 2px,100% calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,0 calc(100% - 2px))" }}>
                ⬇ {proj.downloads}
              </span>
            )}
          </div>
          <h3 style={{ fontFamily: "var(--font-primary)", fontWeight: 700, fontSize: "1.25rem", color: "var(--text-main)", marginBottom: 10, lineHeight: 1.3 }}>
            {proj.title}
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 20 }}>
            {proj.description}
          </p>
        </div>
        <LinkRow links={proj.links} />
      </div>
    </motion.div>
  );
}

/* ── Highlight card: 3-column grid ────────────────────────── */
function HighlightCard({ proj, index }: { proj: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      className="mc-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#0D0D12", marginBottom: 14 }}>
        <Suspense fallback={<div style={{ width: "100%", height: "100%", background: "var(--coal)" }} />}>
          <SafeCarousel images={proj.imgs ?? []} alt={proj.title} className="w-full h-full object-cover" />
        </Suspense>
      </div>
      <div style={{ padding: "0 14px 16px" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
          <TypeBadge short_info={proj.short_info} />
          {"downloads" in proj && proj.downloads && (
            <span style={{ fontFamily: "var(--font-headings)", fontSize: "0.38rem", color: "var(--gold)", background: "rgba(245,197,66,0.12)", border: "1px solid rgba(245,197,66,0.3)", padding: "3px 8px", clipPath: "polygon(0 2px,2px 0,calc(100% - 2px) 0,100% 2px,100% calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,0 calc(100% - 2px))" }}>
              ⬇ {proj.downloads}
            </span>
          )}
        </div>
        <h3 style={{ fontFamily: "var(--font-primary)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-main)", marginBottom: 8, lineHeight: 1.3 }}>
          {proj.title}
        </h3>
        <p style={{ fontSize: "0.78rem", color: "var(--text-dim)", lineHeight: 1.65, marginBottom: 14 }}>
          {proj.description}
        </p>
        <LinkRow links={proj.links} />
      </div>
    </motion.div>
  );
}

/* ── Normal card: compact row, expandable ─────────────────── */
function NormalCard({ proj, index }: { proj: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      style={{
        border: "1px solid rgba(255,255,255,0.07)",
        background: open ? "rgba(120,176,74,0.04)" : "rgba(255,255,255,0.02)",
        clipPath: "polygon(0 3px,3px 0,calc(100% - 3px) 0,100% 3px,100% calc(100% - 3px),calc(100% - 3px) 100%,3px 100%,0 calc(100% - 3px))",
        transition: "background 0.15s",
      }}
    >
      {/* Collapsed header */}
      <div
        onClick={() => setOpen((v) => !v)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen((v) => !v)}
        style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", cursor: "pointer", userSelect: "none" }}
      >
        {proj.imgs?.[0] && (
          <div style={{ width: 48, height: 48, flexShrink: 0, overflow: "hidden", clipPath: "polygon(0 2px,2px 0,calc(100% - 2px) 0,100% 2px,100% calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,0 calc(100% - 2px))", background: "var(--obsidian)" }}>
            <Suspense fallback={<div style={{ width: "100%", height: "100%", background: "var(--coal)" }} />}>
              <SafeImage src={proj.imgs[0]} alt={proj.title} className="w-full h-full object-cover" />
            </Suspense>
          </div>
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontFamily: "var(--font-primary)", fontWeight: 600, fontSize: "0.88rem", color: "var(--text-main)" }}>
            {proj.title}
          </span>
          <div style={{ marginTop: 3 }}>
            <TypeBadge short_info={proj.short_info} />
          </div>
        </div>
        <span style={{ fontFamily: "var(--font-headings)", fontSize: "0.45rem", color: open ? "var(--diamond)" : "var(--text-muted)", transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "all 0.2s", flexShrink: 0 }}>
          ▶
        </span>
      </div>

      {/* Expanded */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 16px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={{ fontSize: "0.82rem", color: "var(--text-dim)", lineHeight: 1.7 }}>
                {proj.description}
              </p>
              <LinkRow links={proj.links} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main section ─────────────────────────────────────────── */
const MinecraftProjects = memo(() => {
  const [showNormal, setShowNormal] = useState(false);

  const featured   = mcProjects.filter((p) => p.category === "featured");
  const highlights = mcProjects.filter((p) => p.category === "highlight");
  const normal     = mcProjects.filter((p) => p.category === "normal");

  return (
    <section id="projects" className="section" style={{ padding: "80px 0 60px" }}>
      <h2 className="section-title" style={{ marginBottom: 4 }}>Minecraft Projects</h2>
      <p style={{ textAlign: "center", fontFamily: "var(--font-vt323)", fontSize: "1.05rem", color: "var(--text-muted)", letterSpacing: "0.12em", marginBottom: 48 }}>
        OFFICIAL MARKETPLACE · COMMUNITY ADDONS
      </p>

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px" }}>

        {/* Featured — 1 per row */}
        {featured.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
            {featured.map((p) => <FeaturedCard key={p.title} proj={p} />)}
          </div>
        )}

        {/* Highlight — 3-column */}
        {highlights.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18, marginBottom: 32 }}>
            {highlights.map((p, i) => <HighlightCard key={p.title} proj={p} index={i} />)}
          </div>
        )}

        {/* Normal — expandable list */}
        {normal.length > 0 && (
          <>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <button onClick={() => setShowNormal((v) => !v)} className="btn-mc btn-mc-secondary" style={{ fontSize: "0.58rem" }}>
                {showNormal ? "▲ Hide Additional Projects" : `▼ Show ${normal.length} More Projects`}
              </button>
            </div>
            <AnimatePresence>
              {showNormal && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 32 }}>
                    {normal.map((p, i) => <NormalCard key={p.title} proj={p} index={i} />)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        <p style={{ textAlign: "center", fontFamily: "var(--font-primary)", fontSize: "0.7rem", color: "var(--text-muted)", marginTop: 8 }}>
          These are selected highlights — there are more unlisted projects.
        </p>
      </div>
    </section>
  );
});

MinecraftProjects.displayName = "MinecraftProjects";
export default MinecraftProjects;
