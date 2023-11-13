import Head from "next/head"
import { useState } from "react"
import Navbar from "../components/Navbar"
import Router from "next/router"
import { AnimatePresence, motion } from "framer-motion"

import "../styles/global.css"

export default function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false)
  Router.events.on("routeChangeStart", () => setLoading(true))
  Router.events.on("routeChangeComplete", () => setLoading(false))
  Router.events.on("routeChangeError", () => setLoading(false))

  return (
    <>
      <Head>
        <title>Mr Ak Editing | Official Website</title>
        <link
          rel="preload"
          href="/montserrat-variablefont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="canonical" href="https://mrakediting.vercel.app" />
        <meta
          name="keywords"
          content="mrakediting,mr ak editing,ak edits,mr ayan khatri, ayan, khatri,photoshop editing,graphic design,poster design,thumbnail design,youtube thumbnail,video editing,mrakediting.vercel.app"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Saad Khatri" />
        <meta name="title" content="Mr Ak Editing | Official Website" />
        <meta
          name="description"
          content="Mr Ak Editing Provides Top Notch Editing Experience in Almost Everything"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mrakediting.vercel.app/" />
        <meta property="og:title" content="Mr Ak Editing | Official Website" />
        <meta
          property="og:description"
          content="Mr Ak Editing Provides Top Notch Editing Experience in Almost Everything"
        />

        {/* Twitter */}

        <meta
          property="twitter:title"
          content="Mr Ak Editing | Official Website"
        />
        <meta
          property="twitter:description"
          content="Mr Ak Editing Provides Top Notch Editing Experience in Almost Everything"
        />
      </Head>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <p style={{ marginTop: "2rem" }}>Hold On</p>
        ) : (
          <Component {...pageProps} key={router.route} />
        )}
      </AnimatePresence>
    </>
  )
}
