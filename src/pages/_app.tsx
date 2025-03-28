import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../carousel.css";
import "../index.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Keyyard Portfolio - Unleash Minecraft Creativity</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Website;