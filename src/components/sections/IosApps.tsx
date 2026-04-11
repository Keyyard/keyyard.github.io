import { Suspense, lazy, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { iosApps } from "../../softwareData";

const SafeImage = lazy(() => import("../ui/SafeImage"));

type App = (typeof iosApps)[number];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.6 } },
};

function AppShowcase({ app }: { app: App }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(10,10,15,0.45)",
        clipPath:
          "polygon(0 8px,8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px))",
        border: "1px solid rgba(167,139,250,0.18)",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {/* ── Background texture ─────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(167,139,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.025) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Content Grid ───────────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          padding: "32px 40px",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          gap: 32,
        }}
      >
        {/* Column 1: App Icon */}
        <motion.div
          variants={fadeUp}
          style={{
            width: 100,
            height: 100,
            flexShrink: 0,
            borderRadius: 24,
            overflow: "hidden",
            border: "1.5px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 0 0 1px rgba(167,139,250,0.1), 0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          <Suspense fallback={<div style={{ width: "100%", height: "100%", background: "var(--coal)" }} />}>
            <SafeImage
              src={app.icon}
              alt={`${app.title} icon`}
              className="w-full h-full object-cover"
            />
          </Suspense>
        </motion.div>

        {/* Column 2: Info (Name, Promotion, Desc) */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <motion.h3
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-primary)",
              fontWeight: 800,
              fontSize: "1.35rem",
              color: "var(--text-main)",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {app.title}
          </motion.h3>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-vt323)",
              fontSize: "1.25rem",
              color: "#C4B5FD",
              letterSpacing: "0.04em",
              margin: 0,
            }}
          >
            {app.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "0.85rem",
              color: "var(--text-dim)",
              lineHeight: 1.6,
              margin: "4px 0 0",
              maxWidth: 500,
            }}
          >
            {app.description}
          </motion.p>
        </div>

        {/* Column 3: CTAs */}
        <motion.div
          variants={fadeUp}
          style={{ 
            display: "flex", 
            flexDirection: "column",
            alignItems: "flex-end", 
            gap: 16 
          }}
        >
          {/* App Store button */}
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#fff",
              color: "#000",
              padding: "8px 16px",
              borderRadius: 10,
              textDecoration: "none",
              border: "none",
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
              transition: "opacity 0.15s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <svg width="14" height="18" viewBox="0 0 814 1000" fill="black" aria-hidden="true">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-42.3-154.7-112.7C115.7 794.2 68 685.5 68 583.2c0-172.8 112.1-264.7 222.1-264.7 59.9 0 109.8 39.5 147.3 39.5 35.8 0 92.1-41.5 159.7-41.5 24.5 0 108.2 2.6 168.9 80.6zm-225.1-200.4c30.2-34 51.6-81.7 51.6-129.4 0-6.4-.6-12.9-1.9-18.1-48.8 1.9-107.5 32.5-142.3 73.3-27.6 31.5-52.2 79.2-52.2 127.5 0 7.1 1.3 14.2 1.9 16.5 3.2.6 8.4 1.3 13.6 1.3 44.1 0 97.4-28.9 129.3-71.1z" />
            </svg>
            <div>
              <div style={{ fontFamily: "var(--font-primary)", fontSize: "0.45rem", color: "rgba(0,0,0,0.65)", lineHeight: 1, marginBottom: 1 }}>
                Download on the
              </div>
              <div style={{ fontFamily: "var(--font-primary)", fontSize: "0.8rem", fontWeight: 700, lineHeight: 1 }}>
                App Store
              </div>
            </div>
          </a>

          {/* Website link */}
          <a
            href={app.landingUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "0.36rem",
              color: "rgba(196,181,253,0.7)",
              letterSpacing: "0.12em",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 4,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#C4B5FD";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(196,181,253,0.7)";
            }}
          >
            WEBSITE
            <span style={{ fontSize: "0.55rem", lineHeight: 1 }}>↗</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

const IosApps = () => {
  return (
    <section id="apps" className="section">
      <h2 className="section-title" style={{ marginBottom: 4 }}>Apps</h2>
      <p
        style={{
          textAlign: "center",
          fontFamily: "var(--font-vt323)",
          fontSize: "1.05rem",
          color: "var(--text-muted)",
          letterSpacing: "0.12em",
          marginBottom: 48,
        }}
      >
        CONSUMER · IOS · INDIE
      </p>

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {iosApps.map((app) => (
            <AppShowcase key={app.title} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IosApps;
