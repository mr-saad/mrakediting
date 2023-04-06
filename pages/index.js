import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const animations = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  transition: { easings: "anticipate" },
};

const Home = () => {
  const [minHeight, setMinHeight] = useState(0);
  useEffect(() => {
    setMinHeight(innerHeight - document.querySelector("nav").clientHeight);
  }, []);

  return (
    <motion.header {...animations} style={{ minHeight }}>
      <div className="left">
        <h1 className="headingAk">
          Hi! I'm <br />
          <span>Ayan Khatri</span>
        </h1>
        <p className="tag">graphic designer / freelancer</p>
        <p className="headerDescription">
          "design can be art. design can be aesthetics. design is so simple,
          that's why it is so complicated."
        </p>
        <Link href="/about" className="btn">
          More About Me
        </Link>
      </div>
      <figure>
        <Image
          quality={50}
          placeholder="blur"
          blurDataURL="/ayan_new.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src="/ayan_new.jpg"
          alt="Ayan Khatri"
        />
      </figure>
    </motion.header>
  );
};

export default Home;
