import Document, { Html, Head, Main, NextScript } from "next/document";

class WebDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />

          {/* SEO Enhancements */}
          <meta
            name="description"
            content="Official Website of Keyyard, portfolio showcasing Minecraft mods, maps, skins, and marketplace projects. Discover unique content to enhance your Minecraft experience."
          />
          <meta
            name="keywords"
            content="Keyyard, Minecraft, Mods, Addons, Marketplace, Minecraft, Tree Capitator, Vein Miner, Actual Guns, MCPEDL, Modbay, PrestonPlayz, Official Minecraft Marketplace, Minecraft Developer, Portfolio, Game Design, Minecraft Bedrock"
          />
          <meta name="author" content="Keyyard" />

          {/* Open Graph data */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Keyyard Official Website" />
          <meta
            property="og:description"
            content="Official Website of Keyyard, portfolio showcasing Minecraft mods, maps, skins, and marketplace projects. Discover unique content to enhance your Minecraft experience."
          />
          <meta property="og:url" content="https://www.keyyard.xyz/" />
          <meta property="og:site_name" content="Keyyard.xyz" />
          <meta property="og:image" content="/keyyard.png" />

          {/* Twitter Card data */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Keyyard Portfolio | Enhance Your Minecraft Experience"
          />
          <meta
            name="twitter:description"
            content="Explore Keyyard's custom Minecraft creations for an enriched gaming experience."
          />
          <meta name="twitter:image" content="/keyyard.png" />
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
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Google Tag Manager */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-Z3K6D9SXF4"
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
