import Document, { Html, Head, Main, NextScript } from "next/document";

class WebDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />

          {/* SEO Enhancements */}
          <meta
            name="keywords"
            content="Keyyard, Minecraft, Mods, Addons, Marketplace, Minecraft, Tree Capitator, Vein Miner, Actual Guns, MCPEDL, Modbay, PrestonPlayz, Official Minecraft Marketplace, Minecraft Developer, Portfolio, Game Design, Minecraft Bedrock"
          />
          <meta name="author" content="Keyyard" />

          {/* Open Graph data */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Keyyard | Minecraft Bedrock Developer" />
          <meta
            property="og:description"
            content="Official Website of Keyyard, a Minecraft Bedrock Developer since 2018. Exploring high-quality mods, addons, and marketplace content like Cut the Rope × Minecraft DLC."
          />
          <meta property="og:url" content="https://keyyard.xyz/" />
          <meta property="og:site_name" content="Keyyard" />
          <meta property="og:image" content="https://keyyard.xyz/keyyard.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Keyyard — Minecraft Bedrock Developer" />

          {/* Twitter Card data */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Keyyard | Minecraft Bedrock Developer" />
          <meta
            name="twitter:description"
            content="Official Website of Keyyard, a Minecraft Bedrock Developer since 2018. Microsoft Partner, DLC Developer, and creator of Actual Guns MCBE."
          />
          <meta name="twitter:image" content="https://keyyard.xyz/keyyard.png" />
          <meta name="twitter:creator" content="@keyyard" />

          {/* Favicon */}
          <link rel="icon" type="image/png" href="/keyyard.png" />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            type="image/png"
            href="/apple-touch-icon.png"
          />
          <link rel="mask-icon" color="#05ac31" href="/safari-pinned-tab.svg" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Outfit:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Google Tag Manager */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-Z3K6D9SXF4"
          />

          {/* Structured Data for Knowledge Graph */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "WebSite",
                    "@id": "https://keyyard.xyz/#website",
                    "name": "Keyyard",
                    "url": "https://keyyard.xyz"
                  },
                  {
                    "@type": "ProfilePage",
                    "@id": "https://keyyard.xyz/#profilepage",
                    "url": "https://keyyard.xyz",
                    "name": "Keyyard — Minecraft Bedrock Developer Portfolio",
                    "isPartOf": { "@id": "https://keyyard.xyz/#website" },
                    "mainEntity": { "@id": "https://keyyard.xyz/#person" }
                  },
                  {
                    "@type": "Person",
                    "@id": "https://keyyard.xyz/#person",
                    "name": "Keyyard",
                    "url": "https://keyyard.xyz",
                    "image": {
                      "@type": "ImageObject",
                      "url": "https://keyyard.xyz/keyyard.png",
                      "contentUrl": "https://keyyard.xyz/keyyard.png"
                    },
                    "jobTitle": "Minecraft Bedrock Developer & Fullstack Engineer",
                    "description": "Minecraft Bedrock Developer since 2018, specializing in high-performance scripting, entity AI, and official marketplace content. Creator of Actual Guns MCBE, Tree Capitator, and collaborator on the Cut the Rope × Minecraft DLC.",
                    "knowsAbout": [
                      "Minecraft Bedrock Scripting",
                      "Game Mechanics Design",
                      "TypeScript",
                      "Node.js",
                      "CLI Tooling",
                      "Entity AI Development"
                    ],
                    "knowsLanguage": ["English", "Indonesian"],
                    "worksFor": [
                      {
                        "@type": "Organization",
                        "name": "Mushco",
                        "url": "https://www.mushco.games/"
                      },
                      {
                        "@type": "Organization",
                        "name": "Mojang Studios",
                        "url": "https://www.minecraft.net",
                        "description": "Official Minecraft DLC content partner."
                      }
                    ],
                    "alumniOf": [
                      { "@type": "Organization", "name": "Bedrock OSS" }
                    ],
                    "sameAs": [
                      "https://twitter.com/keyyard",
                      "https://github.com/keyyard",
                      "https://www.youtube.com/@keyyard",
                      "https://mcpedl.com/user/keyyard/",
                      "https://modbay.org/user/Keyyard/",
                      "https://www.bedrockexplorer.com/@g2crafted",
                      "https://www.npmjs.com/package/create-mc-bedrock"
                    ]
                  }
                ]
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WebDocument;
