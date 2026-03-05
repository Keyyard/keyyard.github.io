import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import {
  aboutPlayerInfo,
  mcSkillsData,
  techStackData,
  academicData,
} from "../../data";

const HeadRender = dynamic(() => import("../layout/MyHead"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "var(--coal)",
        clipPath:
          "polygon(0 4px,4px 0,calc(100% - 4px) 0,100% 4px,100% calc(100% - 4px),calc(100% - 4px) 100%,4px 100%,0 calc(100% - 4px))",
        animation: "pulse 1.5s ease-in-out infinite",
      }}
    />
  ),
});

function McLabel({
  children,
  color,
  mb = 20,
}: {
  children: string;
  color: string;
  mb?: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5em",
        fontFamily: "var(--font-headings)",
        fontSize: "1rem",
        color,
        letterSpacing: "0.12em",
        marginBottom: mb,
        lineHeight: 1,
      }}
    >
      <span aria-hidden="true">▶</span>
      <span>{children}</span>
    </div>
  );
}

function SkillBar({
  label,
  percent,
  delay = 0,
}: {
  label: string;
  percent: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-primary)",
            fontSize: "0.92rem",
            color: "var(--text-dim)",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "0.62rem",
            color: "var(--grass-glow)",
          }}
        >
          {percent}%
        </span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay }}
        />
      </div>
    </div>
  );
}

const About = () => {
  return (
    <section id="about" className="section" style={{ padding: "80px 0 60px" }}>
      <h2 className="section-title" style={{ marginBottom: 48 }}>
        About Me
      </h2>

      <div className="container-main">
        {/* Top row: 3D head + player info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            marginBottom: 24,
            alignItems: "center",
          }}
        >
          {/* 3D Head */}
          <div style={{ position: "relative" }}>
            <McLabel color="var(--grass-bright)" mb={12}>
              ME
            </McLabel>
            <div
              style={{
                width: "100%",
                height: 280,
                border: "1px solid rgba(255,255,255,0.08)",
                clipPath:
                  "polygon(0 4px,4px 0,calc(100% - 4px) 0,100% 4px,100% calc(100% - 4px),calc(100% - 4px) 100%,4px 100%,0 calc(100% - 4px))",
                overflow: "hidden",
              }}
            >
              <HeadRender />
            </div>
            <p
              style={{
                fontFamily: "var(--font-vt323)",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                textAlign: "center",
                marginTop: 8,
                letterSpacing: "0.08em",
              }}
            >
              Move mouse · Click to animate
            </p>
            {/* Trophy Cabinet */}
            <div
              style={{
                textAlign: "center",
                marginTop: 20 ,
                padding: "8px 0",
                letterSpacing: "0.08em",
              }}>
              <a
                href="/trophies"
                className="btn-mc btn-mc-trophies"
                style={{ flexShrink: 0, textDecoration: "none" }}
              >
                View Trophy Cabinet
              </a>
            </div>
          </div>

          {/* Player Info */}
          <div className="card" style={{ height: "100%" }}>
            <McLabel color="var(--grass-bright)">PLAYER INFO</McLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {aboutPlayerInfo?.map((paragraph, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    color: "var(--text-dim)",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Minecraft Skill Stats */}
        <div className="card" style={{ marginBottom: 24 }}>
          <McLabel color="var(--grass-glow)" mb={24}>
            MINECRAFT SKILL STATS
          </McLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {mcSkillsData?.map((skill, i) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                percent={skill.percent}
                delay={i * 0.12}
              />
            ))}
          </div>
        </div>

        {/* Credentials & Awards */}
        {academicData?.length > 0 && (
          <div className="card" style={{ marginBottom: 24 }}>
            <McLabel color="var(--gold)">CREDENTIALS & AWARDS</McLabel>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {academicData?.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "14px 0",
                    borderBottom:
                      i < (academicData?.length || 0) - 1
                        ? "1px solid rgba(255,255,255,0.05)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.4rem",
                      lineHeight: 1,
                      marginTop: 2,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        flexWrap: "wrap",
                        marginBottom: 4,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-primary)",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "var(--text-main)",
                        }}
                      >
                        {item.title}
                      </span>
                      <span
                        className="mc-tag"
                        style={{
                          color: "var(--gold)",
                          borderColor: "rgba(245,197,66,0.3)",
                          background: "rgba(245,197,66,0.08)",
                        }}
                      >
                        {item.category}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-vt323)",
                          fontSize: "0.95rem",
                          color: "var(--text-muted)",
                          marginLeft: "auto",
                        }}
                      >
                        {item.date}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontSize: "0.88rem",
                        color: "var(--text-dim)",
                        margin: 0,
                      }}
                    >
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Tech Stack */}
        <h3 className="subsection-title" style={{ marginBottom: 20 }}>
          Tech Stack
        </h3>
        <div className="grid-two-col" style={{ marginBottom: 40 }}>
          {techStackData?.map((stack, index) => (
            <motion.div
              key={index}
              className="card-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.07 * index }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-headings)",
                  fontSize: "1rem",
                  color: "var(--grass-bright)",
                  letterSpacing: "0.08em",
                  marginBottom: 12,
                }}
              >
                {stack.title}
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {stack.items?.map((item, idx) => (
                  <span key={idx} className="mc-tag">
                    {"label" in item && item.label ? `${item.label}: ` : ""}
                    {item.value}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
