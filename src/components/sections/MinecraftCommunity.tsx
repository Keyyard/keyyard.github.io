import { Suspense, lazy, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { mcCommunityProjects } from "../../data";

const SafeImage = lazy(() => import("../ui/SafeImage"));

type Project = (typeof mcCommunityProjects)[number];

const LINK_COLORS: Record<string, { bg: string; color: string }> = {
  "Github":            { bg: "#3D2E55", color: "#E2D4F0" },
  "NPM Package":       { bg: "#5C1A1A", color: "#F5A0A0" },
  "Website":           { bg: "#0D2A3D", color: "#7DD8F8" },
  "VSCode Marketplace":{ bg: "#0C2640", color: "#4EA7E8" },
  "Wiki Website":      { bg: "#1A2D0D", color: "#A3D977" },
};
function linkStyle(name: string) {
  return LINK_COLORS[name] ?? { bg: "#252528", color: "#B8A88A" };
}

function CommunityCard({ proj, index }: { proj: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        clipPath: "polygon(0 4px,4px 0,calc(100% - 4px) 0,100% 4px,100% calc(100% - 4px),calc(100% - 4px) 100%,4px 100%,0 calc(100% - 4px))",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s, background 0.2s, transform 0.15s",
        overflow: "hidden",
      }}
      whileHover={{ y: -4, transition: { duration: 0.15 } }}
    >
      {/* Preview image */}
      <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", background: "#0D0D12", flexShrink: 0 }}>
        <Suspense fallback={<div style={{ width: "100%", height: "100%", background: "var(--coal)" }} />}>
          <SafeImage
            src={proj.imgs?.[0] ?? ""}
            alt={proj.title}
            className="w-full h-full object-cover"
          />
        </Suspense>
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 14 }}>
        <div>
          {/* Icon + Title row */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            {proj.icon && (
              <div style={{ width: 36, height: 36, flexShrink: 0, overflow: "hidden", clipPath: "polygon(0 3px,3px 0,calc(100% - 3px) 0,100% 3px,100% calc(100% - 3px),calc(100% - 3px) 100%,3px 100%,0 calc(100% - 3px))", background: "var(--obsidian)" }}>
                <Suspense fallback={<div style={{ width: "100%", height: "100%", background: "var(--coal)" }} />}>
                  <SafeImage src={proj.icon} alt={proj.title} className="w-full h-full object-cover" />
                </Suspense>
              </div>
            )}
            <div>
              <h3 style={{ fontFamily: "var(--font-primary)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-main)", lineHeight: 1.3 }}>
                {proj.title}
              </h3>
              <span style={{ fontFamily: "var(--font-vt323)", fontSize: "0.85rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                {proj.short_info}
              </span>
            </div>
          </div>

          <p style={{ fontSize: "0.82rem", color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 14 }}>
            {proj.description}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
            {proj.tags.map((tag) => (
              <span key={tag} className="mc-tag">{tag}</span>
            ))}
          </div>
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
  );
}

const MinecraftCommunity = () => {
  return (
    <section id="community-software" style={{ padding: "60px 0" }}>
      <h2 className="section-title" style={{ marginBottom: 4 }}>Community Software</h2>
      <p style={{ textAlign: "center", fontFamily: "var(--font-vt323)", fontSize: "1.05rem", color: "var(--text-muted)", letterSpacing: "0.12em", marginBottom: 48 }}>
        TOOLS &amp; RESOURCES FOR MINECRAFT BEDROCK DEVELOPERS
      </p>

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 20 }}>
          {mcCommunityProjects.map((proj, i) => (
            <CommunityCard key={proj.title} proj={proj} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinecraftCommunity;
