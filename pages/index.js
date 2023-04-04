import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [minHeight, setMinHeight] = useState(0);
  useEffect(() => {
    setMinHeight(innerHeight - document.querySelector("nav").clientHeight);
  }, []);

  return (
    <header style={{ minHeight }}>
      <div className="left">
        <h1 className="headingAk">
          Hi! I'm <br />
          <span>Ayan Khatri</span>
        </h1>
        <p className="tag">graphic designer / freelancer</p>
        <p className="headerDescription">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          nulla veritatis voluptates. Voluptas aspernatur quaerat dicta
          consectetur corporis id explicabo.
        </p>
        <Link href="/about" className="btn">
          More About Me
        </Link>
      </div>
      <figure>
        <Image
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          src="/ayan.webp"
          alt="Ayan Khatri"
        />
      </figure>
    </header>
  );
};

export default Home;
