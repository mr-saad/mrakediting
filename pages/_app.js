import Head from "next/head"
import { useState } from "react"
import Navbar from "../components/Navbar"
import Spinner from "react-spinners/BeatLoader"
import Router from "next/router"
import { AnimatePresence, motion } from "framer-motion"
import { animations } from "./index"

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
        <meta
          name="keywords"
          content="mrakediting,mrayankhatri,ayan,khatri,mr,photoshop,editing,photo,graphic-design,design,graphic,poster,thumbnail,youtube-thumbnail,video-editing,video,mrakediting.netlify.app"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Ayan Khatri, Saad Khatri" />
        <meta name="title" content="Mr Ak Editing | Official Website" />
        <meta
          name="description"
          content="Mr Ak Editing Provides Top Notch Editing Experience in Almost Everything"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mrakediting.netlify.app/" />
        <meta property="og:title" content="Mr Ak Editing | Official Website" />
        <meta
          property="og:description"
          content="Mr Ak Editing Provides Top Notch Editing Experience in Almost Everything"
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://mrakediting.netlify.app/"
        />
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
      <div className="main_div">
        <AnimatePresence exitBeforeEnter>
          {loading ? (
            <motion.div {...animations} className="loadingContainer">
              <Spinner color="#262626" />
            </motion.div>
          ) : (
            <Component {...pageProps} key={router.route} />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
