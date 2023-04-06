import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { animations } from "./index";
const About = () => {
  const [minHeight, setMinHeight] = useState(0);
  useEffect(() => {
    setMinHeight(innerHeight - document.querySelector("nav").clientHeight);
  }, []);
  return (
    <motion.div {...animations} className="about" style={{ minHeight }}>
      {/* <div className="flex"> */}
      <div className="workGrid">
        <div className="workTile">
          <span className="bigTxt">3+ </span>
          <br />
          Years Experience
        </div>
        <div className="workTile">
          <span className="bigTxt">700+</span> <br />
          Projects Done
        </div>
        <div className="vrLine"></div>
        <div className="workTile">
          <span className="bigTxt">500+</span> <br />
          Happy Clients
        </div>
        <div className="workTile">
          <span className="bigTxt">2k+</span> <br />
          Followers on IG
        </div>
      </div>
      <ul className="whatido">
        <h2>What I Do?</h2>
        <li>YT Thumbnail | Poster | Retouching</li>
        <li>Logo | YT Cover | Lyrical Video</li>
        <li>Business Card | Visiting Card</li>
        <li>Banner | Flyer | Flex Design</li>
        <li>Wedding Card | Invitation Card</li>
        <li>Advertising Post design | Bill book invoice</li>
        <li>Social Media Post Design</li>
        <p style={{ marginTop: 10, textAlign: "center" }}>
          All Types Of Designing
        </p>
      </ul>
    </motion.div>
  );
};

export default About;
