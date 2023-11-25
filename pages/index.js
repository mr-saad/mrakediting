import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export const animations = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.1, easings: "anticipate" }
}

const Home = () => {
  return (
    <motion.section className="home" {...animations}>
      <div className="left">
        <div>
          <h1 className="headingAk">
            I'm <span>Ayan Khatri</span>
          </h1>
          <p style={{ marginBlock: "1rem" }}>Graphic Designer | Freelancer</p>
        </div>
        <Link prefetch={false} href="/about" className="btn">
          About Me &#8599;
        </Link>
      </div>

      <Image
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw"
        loading="eager"
        width={400}
        height={400}
        style={{
          objectFit: "cover",
          objectPosition: "top",
          maxWidth: "100%",
          aspectRatio: 1
        }}
        src="/ayan_new.jpg"
        alt="Ayan Khatri"
      />
    </motion.section>
  )
}

export default Home
