import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../carousel.css";
import "../index.css"
import type { AppProps } from 'next/app';

function Website({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Website;