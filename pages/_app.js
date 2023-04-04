import Head from "next/head";
import Navbar from "../components/navbar";

import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mr Ak Editing | Official Website</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <Navbar />
    </>
  );
}
