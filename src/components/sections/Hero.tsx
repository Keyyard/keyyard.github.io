import { motion } from "framer-motion";
import { useCallback, memo } from "react";
import { heroData } from "../../data";

const Hero = memo(() => {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="hero"
      className="section-hero noise-overlay"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
        paddingBottom: "120px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* Ambient radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(93,138,60,0.12) 0%, rgba(78,205,196,0.04) 45%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Floating blocks */}
      <div
        className="floating-blocks"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {Array.from({ length: heroData.floatingBlocksCount }).map((_, i) => (
          <div key={i} className="float-block" />
        ))}
      </div>

      {/* Corner block decorations */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          display: "flex",
          gap: 4,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {heroData.cornerBlocks.topLeft.map((bg, i) => (
          <div
            key={i}
            style={{
              width: 18,
              height: 18,
              background: bg,
              opacity: 0.5,
              clipPath:
                "polygon(0 2px,2px 0,calc(100% - 2px) 0,100% 2px,100% calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,0 calc(100% - 2px))",
            }}
          />
        ))}
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          display: "flex",
          gap: 4,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {heroData.cornerBlocks.topRight.map((bg, i) => (
          <div
            key={i}
            style={{
              width: 18,
              height: 18,
              background: bg,
              opacity: 0.5,
              clipPath:
                "polygon(0 2px,2px 0,calc(100% - 2px) 0,100% 2px,100% calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,0 calc(100% - 2px))",
            }}
          />
        ))}
      </div>

      {/* All content centered */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Block row above name */}
        <div
          aria-hidden="true"
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 20,
            animation: "fadeUp 0.5s ease 0.1s both",
          }}
        >
          {heroData.blockRow.map((cls, i) => (
            <div key={i} className={`block-mc ${cls}`} />
          ))}
        </div>

        {/* Pixel name */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <h1 className="pixel-name" data-text={heroData.pixelName}>
            {heroData.pixelName}
            <span className="sr-only">
              {" "}
              — Minecraft Bedrock Developer, iOS Engineer &amp; Microsoft
              Marketplace Partner
            </span>
          </h1>
        </div>

        {/* Role badge */}
        <p className="role-badge" style={{ marginBottom: 40 }}>
          {heroData.roleBadge}
        </p>

        {/* Story hook */}
        <div className="story-hook" style={{ marginBottom: 40 }}>
          <p dangerouslySetInnerHTML={{ __html: heroData.storyHook }} />
        </div>

        {/* Impact stats */}
        <div
          role="list"
          className="stat-cards-row"
          style={{ marginBottom: 52, animation: "fadeUp 0.7s ease 0.7s both" }}
        >
          {heroData.statCards.map((card, i) => (
            <div
              className={`stat-card ${card.cssClass}`}
              role="listitem"
              title={card.title}
              key={i}
            >
              <div
                className="stat-block-icon"
                style={{
                  background: card.blockBg,
                  boxShadow: card.blockShadow,
                }}
                aria-hidden="true"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="stat-num">{card.num}</div>
                <div className="stat-label">{card.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured project callout */}
        <a
          href={heroData.featuredCallout.link}
          className="featured-callout"
          style={{ marginBottom: 52 }}
        >
          <div className="featured-label">{heroData.featuredCallout.label}</div>
          <div
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--text-main)",
              marginBottom: 6,
            }}
          >
            {heroData.featuredCallout.title}
          </div>
          <div
            style={{
              fontSize: "0.88rem",
              color: "var(--text-dim)",
              lineHeight: 1.6,
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: heroData.featuredCallout.description,
              }}
            />
          </div>
          <div className="featured-arrow">▶</div>
        </a>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
            marginBottom: 48,
            animation: "fadeUp 0.7s ease 1.1s both",
          }}
        >
          {heroData.ctaButtons.map((btn, i) => (
            <button
              key={i}
              onClick={() => scrollTo(btn.action)}
              className={`btn-mc btn-mc-${btn.variant}`}
            >
              {btn.text}
            </button>
          ))}
        </div>

        {/* XP bar */}
        <div
          style={{
            width: "100%",
            maxWidth: 420,
            textAlign: "center",
            animation: "fadeUp 0.6s ease 1.3s both",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "0.45rem",
              color: "var(--text-muted)",
              letterSpacing: "0.15em",
              marginBottom: 6,
              textTransform: "uppercase",
            }}
          >
            {heroData.xpBar.label}
          </div>
          <div className="xp-track">
            <motion.div
              className="xp-fill"
              initial={{ width: 0 }}
              animate={{ width: `${heroData.xpPercent}%` }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
            />
          </div>
          <div
            style={{
              fontFamily: "var(--font-vt323)",
              fontSize: "0.95rem",
              color: "var(--text-muted)",
              marginTop: 4,
              letterSpacing: "0.08em",
            }}
          >
            {heroData.xpBar.progressText}
          </div>
        </div>
      </div>

      {/* Ground row */}
      <div className="ground-row" aria-hidden="true">
        {Array.from({ length: heroData.groundSegments }).map((_, i) => (
          <div key={i} className="ground-segment" />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span className="scroll-hint-text">Scroll to explore</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export { Hero };
