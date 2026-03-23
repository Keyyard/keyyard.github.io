import Head from "next/head";

/* ─── Design tokens ─────────────────────────────────────── */
const C = {
  bg:         "#202832",
  pearl:      "#EAE0C8",
  pearl55:    "rgba(234,224,200,0.55)",
  pearl35:    "rgba(234,224,200,0.35)",
  pearl18:    "rgba(234,224,200,0.18)",
  pearl08:    "rgba(234,224,200,0.08)",
  pearl04:    "rgba(234,224,200,0.04)",
};

const FEATURES = [
  {
    num: "01",
    name: "Focus Mode",
    desc: "Block your selected apps indefinitely. No timer, no excuses. When you're ready to create, the noise disappears.",
  },
  {
    num: "02",
    name: "Timer Mode",
    desc: "Set a countdown. Your apps stay locked until the session ends. Deadlines are a feature, not a bug.",
  },
  {
    num: "03",
    name: "Guard Mode",
    desc: "Set a daily usage limit. The moment you cross it, the apps vanish for the rest of the day — automatically.",
  },
  {
    num: "04",
    name: "Breathe First",
    desc: "Before a blocked app opens, you complete a 4-7-8 breathing ritual. Want back in? Earn it.",
  },
  {
    num: "05",
    name: "Willpower Analytics",
    desc: "A chart of every moment you resisted. Your streaks, your weakest hours, your strongest days — all visible.",
  },
];

export default function NoDoomscrollingPage() {
  return (
    <>
      <Head>
        <title>No Doomscrolling — Take back your time to create more</title>
        <meta name="description" content="An iOS app that blocks distracting apps, guides you through a 4-7-8 breathing ritual, and tracks your willpower over time. Coming soon." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="No Doomscrolling" />
        <meta property="og:description" content="Take back your time to create more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keyyard.xyz/no-doomscrolling" />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* ── Root ───────────────────────────────────────────── */}
      <div className="root">

        {/* ── HERO ────────────────────────────────────────── */}
        <section className="hero">

          {/* Warm glow behind headline */}
          <div className="hero-glow" aria-hidden="true" />

          {/* iOS pill */}
          <div className="pill fade-1">
            <span className="pill-dot" aria-hidden="true" />
            iOS 17+
          </div>

          {/* Headline */}
          <h1 className="headline fade-2">
            No<br />Doomscrolling
          </h1>

          {/* Tagline */}
          <p className="tagline fade-3">
            Take back your time<br />to create more.
          </p>

          {/* Coming soon */}
          <div className="coming-soon fade-4">
            Coming Soon
          </div>

          {/* Scroll line */}
          <div className="scroll-line fade-5" aria-hidden="true" />
        </section>

        {/* ── RULE ─────────────────────────────────────────── */}
        <div className="hr" aria-hidden="true" />

        {/* ── FEATURES ─────────────────────────────────────── */}
        <section className="features">
          {FEATURES.map((f, i) => (
            <div key={f.num} className={`feature-row ${i < FEATURES.length - 1 ? "feature-row--border" : ""}`}>
              <span className="feature-num">{f.num}</span>
              <div className="feature-content">
                <h2 className="feature-name">{f.name}</h2>
                <p className="feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ── QUOTE ─────────────────────────────────────────── */}
        <section className="quote-section">
          <div className="quote-glow" aria-hidden="true" />
          <blockquote className="quote">
            "Every scroll is a choice.<br />Make it intentional."
          </blockquote>
        </section>

        {/* ── RULE ─────────────────────────────────────────── */}
        <div className="hr" aria-hidden="true" />

        {/* ── FOOTER ────────────────────────────────────────── */}
        <footer className="footer">
          <span className="footer-wordmark">No Doomscrolling</span>
          <nav className="footer-links" aria-label="Legal">
            <a href="/no-doomscrolling/privacy" className="footer-link">Privacy Policy</a>
            <span className="footer-sep" aria-hidden="true">·</span>
            <a href="/no-doomscrolling/terms" className="footer-link">Terms & Conditions</a>
          </nav>
          <span className="footer-copy">
            © {new Date().getFullYear()} Keyyard
          </span>
        </footer>
      </div>

      {/* ── STYLES ──────────────────────────────────────────── */}
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${C.bg}; -webkit-font-smoothing: antialiased; }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes breathe {
          0%,100% { opacity: 0.7; transform: translate(-50%,-50%) scale(1);    }
          50%      { opacity: 1;   transform: translate(-50%,-50%) scale(1.08); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; height: 0; }
          to   { opacity: 1; height: 60px; }
        }

        /* ── Root ── */
        .root {
          background: ${C.bg};
          color: ${C.pearl};
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── Hero ── */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 24px 100px;
          position: relative;
        }
        .hero-glow {
          position: absolute;
          top: 38%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(700px, 90vw);
          height: min(700px, 90vw);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(234,224,200,0.065) 0%, transparent 65%);
          pointer-events: none;
          animation: breathe 9s ease-in-out infinite;
        }

        /* ── Pill ── */
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid ${C.pearl18};
          border-radius: 100px;
          padding: 6px 16px;
          margin-bottom: 52px;
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.14em;
          color: ${C.pearl35};
          text-transform: uppercase;
          opacity: 0;
        }
        .pill-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${C.pearl};
          opacity: 0.5;
          display: inline-block;
          flex-shrink: 0;
        }

        /* ── Headline ── */
        .headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(4rem, 13vw, 9.5rem);
          font-weight: 300;
          font-style: italic;
          line-height: 0.92;
          letter-spacing: -0.025em;
          color: ${C.pearl};
          margin-bottom: 36px;
          opacity: 0;
        }

        /* ── Tagline ── */
        .tagline {
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          font-weight: 300;
          color: ${C.pearl55};
          letter-spacing: 0.03em;
          line-height: 1.65;
          margin-bottom: 56px;
          max-width: 320px;
          opacity: 0;
        }

        /* ── Coming soon ── */
        .coming-soon {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${C.bg};
          background: ${C.pearl};
          padding: 11px 28px;
          border-radius: 3px;
          opacity: 0;
        }

        /* ── Scroll line ── */
        .scroll-line {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 56px;
          background: linear-gradient(to bottom, ${C.pearl35}, transparent);
          opacity: 0;
        }

        /* ── Horizontal rule ── */
        .hr {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, transparent, ${C.pearl08} 30%, ${C.pearl08} 70%, transparent);
        }

        /* ── Features ── */
        .features {
          max-width: 900px;
          margin: 0 auto;
          padding: 100px 32px;
        }
        .feature-row {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 0 48px;
          padding: 52px 0;
          align-items: start;
        }
        .feature-row--border {
          border-bottom: 1px solid ${C.pearl08};
        }
        .feature-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: ${C.pearl18};
          padding-top: 8px;
          display: block;
        }
        .feature-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 400;
          font-style: italic;
          color: ${C.pearl};
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin-bottom: 18px;
        }
        .feature-desc {
          font-size: clamp(0.875rem, 1.5vw, 1rem);
          font-weight: 300;
          color: ${C.pearl55};
          line-height: 1.75;
          max-width: 540px;
        }

        /* ── Quote ── */
        .quote-section {
          padding: 120px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .quote-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: min(900px, 100vw);
          height: 300px;
          transform: translate(-50%, -50%);
          background: radial-gradient(ellipse, rgba(234,224,200,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.6rem, 4.5vw, 3.2rem);
          font-weight: 300;
          font-style: italic;
          color: ${C.pearl};
          line-height: 1.25;
          letter-spacing: -0.01em;
          max-width: 720px;
          margin: 0 auto;
          position: relative;
        }

        /* ── Footer ── */
        .footer {
          padding: 48px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }
        .footer-wordmark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 300;
          font-style: italic;
          letter-spacing: 0.04em;
          color: ${C.pearl35};
        }
        .footer-links {
          display: flex;
          align-items: center;
          gap: 14px;
          list-style: none;
        }
        .footer-link {
          font-size: 0.78rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: ${C.pearl35};
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: ${C.pearl55}; }
        .footer-sep {
          color: ${C.pearl18};
          font-size: 0.8rem;
        }
        .footer-copy {
          font-size: 0.72rem;
          color: rgba(234,224,200,0.15);
          letter-spacing: 0.05em;
        }

        /* ── Staggered load animations ── */
        .fade-1 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.1s forwards; }
        .fade-2 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.25s forwards; }
        .fade-3 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.42s forwards; }
        .fade-4 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.58s forwards; }
        .fade-5 { animation: fadeIn  1s ease                       1.1s  forwards; }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .feature-row {
            grid-template-columns: 1fr;
            gap: 12px 0;
            padding: 40px 0;
          }
          .feature-num { padding-top: 0; }
          .features { padding: 72px 24px; }
        }
      `}</style>
    </>
  );
}
