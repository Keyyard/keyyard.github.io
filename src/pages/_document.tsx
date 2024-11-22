import Document, { Html, Head, Main, NextScript } from 'next/document';

class WebDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/png" href="/keyyard.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* SEO Enhancements */}
          <meta
            name="description"
            content="Explore the portfolio of Hieu - Keyyard, a key figure in Minecraft content creation. Discover mods like 'Tree Capitator and Vein Miner', 'Actual Guns MCBE', and official Minecraft Marketplace projects including 'Trains (CRAFTABLE)', 'One Block Extra', 'Scary Myth Mobs', and 'TNT Experiments'. Experience a blend of creativity, innovation, and technical prowess in the world of Minecraft."
          />
          <meta
            name="keywords"
            content="Minecraft, Keyyard, Mods, Addons, Marketplace, Minecraft Creations, Tree Capitator, Vein Miner, Actual Guns, Trains Game, One Block, Lucky Block, MCPEDL, Preston, Roblox, Scary Myth Mobs, TNT Experiments, Minecraft Developer, Portfolio, Game Design, Minecraft Bedrock, Custom Content, Mod Development, MCPEDL, MODBAY"
          />
          <meta name="author" content="Hieu - Keyyard (Trinh Minh Hieu)" />

          {/* Open Graph data */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Keyyard's Minecraft Portfolio" />
          <meta
            property="og:description"
            content="Explore Hieu's creative Minecraft mods, maps, skins, and marketplace projects. Enhance your Minecraft experience with unique content."
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
          
          {/* For mobile devices */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="Keyyard Portfolio" />

          <link
            href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Montserrat:wght@400;700&family=Open+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <title>Keyyard Portfolio - Unleash Minecraft Creativity</title>

          {/* Google Tag Manager */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-Z3K6D9SXF4"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-Z3K6D9SXF4');
              `,
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