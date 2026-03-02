import { motion, AnimatePresence } from "framer-motion";
import { useState, memo } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experiences, experienceNodeStyles, experienceTiers, experienceLegend } from "../../data";

function ExperienceNode({
  exp,
  tier,
  index,
}: {
  exp: (typeof experiences)[number];
  tier: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const node = experienceNodeStyles[tier] ?? experienceNodeStyles.stone;

  const isPresentJob = exp.date.toLowerCase().includes("present");

  return (
    <motion.div
      ref={ref}
      className="mc-timeline-node"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
    >
      {/* Block node icon */}
      <div
        className="mc-timeline-icon"
        style={{ background: node.bg, boxShadow: node.shadow }}
        aria-hidden="true"
      />

      {/* Content card */}
      <div
        className={`mc-timeline-content${open ? " active" : ""}`}
        onClick={() => setOpen((v) => !v)}
        role="button"
        aria-expanded={open}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen((v) => !v)}
      >
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
              <h3 style={{ fontFamily: "var(--font-primary)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-main)" }}>
                {exp.title}
              </h3>
              {isPresentJob && (
                <span style={{
                  fontFamily: "var(--font-headings)", fontSize: "0.38rem", padding: "2px 8px",
                  background: "rgba(163,217,119,0.15)", color: "var(--grass-glow)",
                  border: "1px solid rgba(163,217,119,0.35)",
                  clipPath: "polygon(0 2px,2px 0,calc(100% - 2px) 0,100% 2px,100% calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,0 calc(100% - 2px))",
                }}>
                  ● CURRENT
                </span>
              )}
            </div>
            <a
              href={exp.company_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ fontFamily: "var(--font-vt323)", fontSize: "1.05rem", color: "var(--text-dim)", letterSpacing: "0.05em" }}
            >
              {exp.company_name}
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "var(--font-primary)", fontSize: "0.72rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
              {exp.date}
            </span>
            <span style={{ fontFamily: "var(--font-headings)", fontSize: "0.5rem", color: open ? "var(--diamond)" : "var(--text-muted)", transform: open ? "rotate(90deg)" : "rotate(0deg)", display: "inline-block", transition: "all 0.2s" }}>
              ▶
            </span>
          </div>
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ overflow: "hidden", marginTop: 12, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}
            >
              {exp.details.map((detail, i) => (
                <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: "0.85rem", color: "var(--text-dim)", lineHeight: 1.65 }}>
                  <span style={{ color: "var(--grass-bright)", flexShrink: 0, marginTop: 3 }}>▸</span>
                  {detail}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

const Experiences = memo(() => {
  return (
    <section id="experiences" className="section" style={{ padding: "80px 0 60px" }}>
      <h2 className="section-title" style={{ marginBottom: 8 }}>Career Journey</h2>
      <p style={{ textAlign: "center", fontFamily: "var(--font-vt323)", fontSize: "1.1rem", color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: 48 }}>
        Click any entry to expand details
      </p>

      {/* Timeline legend */}
      <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
        {experienceLegend.map(({ label, tier }) => {
          const s = experienceNodeStyles[tier];
          return (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{
                width: 14, height: 14,
                background: s.bg,
                clipPath: "polygon(0 2px,2px 0,calc(100% - 2px) 0,100% 2px,100% calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,0 calc(100% - 2px))",
                flexShrink: 0,
              }} />
              <span style={{ fontFamily: "var(--font-primary)", fontSize: "0.72rem", color: "var(--text-muted)" }}>{label}</span>
            </div>
          );
        })}
      </div>

      <div className="mc-timeline">
        {experiences.map((exp, i) => (
          <ExperienceNode
            key={`${exp.company_name}-${i}`}
            exp={exp}
            tier={experienceTiers[i] ?? "stone"}
            index={i}
          />
        ))}
      </div>
    </section>
  );
});

Experiences.displayName = "Experiences";

export default Experiences;
