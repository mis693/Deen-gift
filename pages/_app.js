// pages/_app.js
import '../styles/globals.css';
import LoadingScreen from '../components/LoadingScreen';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Ensure favicon is present in /public */}
      <Head>
        <title>Deeni Gift</title>
        <meta name="description" content="Send beautiful Islamic gifts with duas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoadingScreen>
        <Component {...pageProps} />
      </LoadingScreen>
    </>
  );
}

export default MyApp;
