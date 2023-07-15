import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export const animations = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.1, easings: "anticipate" },
}

const Home = () => {
  return (
    <motion.section className="home" {...animations}>
      <div className="left">
        <div>
          <h1 className="headingAk">
            Hey! I'm <span>Ayan Khatri</span>
          </h1>
          <p>Graphic Designer | Freelancer</p>
        </div>
        <p className="headerDescription">
          Design can be Art. design can be Aesthetics. design is so Simple,
          that's why it is so Complicated
        </p>
        <Link href="/about" className="btn">
          About Me
        </Link>
      </div>

      <Image
        sizes="(max-width: 540px) 50vw, (max-width: 1200px) 80vw"
        priority={true}
        width={300}
        height={300}
        style={{ objectFit: "cover", objectPosition: "top", maxWidth: "100%" }}
        src="/ayan_new.jpg"
        alt="Ayan Khatri"
      />
    </motion.section>
  )
}

export default Home
