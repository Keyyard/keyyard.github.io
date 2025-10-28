import { useEffect } from 'react';
import Head from 'next/head';

export default function Discord() {
  useEffect(() => {
    // Redirect to Discord server
    window.location.replace('https://discord.gg/s2VfQr69uz');
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting to Discord...</title>
        <meta httpEquiv="refresh" content="0; url=https://discord.gg/s2VfQr69uz" />
      </Head>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <p>Redirecting to Discord...</p>
      </div>
    </>
  );
}
