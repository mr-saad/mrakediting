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
        <Link href="/about" className="btn">
          About Me
        </Link>
      </div>

      <Image
        sizes="(max-width: 540px) 50vw, (max-width: 1200px) 80vw"
        loading="eager"
        priority={true}
        placeholder="blur"
        blurDataURL="/loading.png"
        width={300}
        height={300}
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
