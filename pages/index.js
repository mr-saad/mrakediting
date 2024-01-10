import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { animations } from "../components/animations"

export default function Home() {
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
          About Me <span style={{ fontSize: 22 }}>&#8599;</span>
        </Link>
      </div>

      <Image
        priority
        sizes="(max-width: 640px) 90vw, 40vw"
        loading="eager"
        decoding="async"
        width={400}
        height={400}
        style={{
          objectFit: "cover"
        }}
        src="/ayan_new.webp"
        alt="Ayan Khatri"
      />
    </motion.section>
  )
}
