import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../carousel.css";
import "../index.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Keyyard | Minecraft Addon Developer - Where Creativity Is Built Block by Block</title>
      </Head>
      {/* Google Tag Manager */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Z3K6D9SXF4"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z3K6D9SXF4');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default Website;