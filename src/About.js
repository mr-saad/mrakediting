import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="border">About Me</h1>
      <h1 className="t-center">
        I'm Ayan Khatri,{" "}
        <span className="thin">Graphic Designer / Freelancer</span>
      </h1>
      <div className="flex">
        <div className="workGrid">
          <div className="workTile">
            <span className="bigTxt">5+ </span>
            <br />
            Years Experience
          </div>
          <div className="workTile">
            <span className="bigTxt">500+</span> <br />
            Projects Done
          </div>
          <div className="vrLine"></div>
          <div className="workTile">
            <span className="bigTxt">200+</span> <br />
            Happy Clients
          </div>
          <div className="workTile">
            <span className="bigTxt">9k+</span> <br />
            Followers on IG
          </div>
        </div>
        <div className="whatido">
          <h2>What I Do?</h2>
          <li>YT Thumbnail | Poster | Retouching</li>
          <li>Logo | YT Cover | Lyrical Video</li>
          <li>Business Card | Visiting Card</li>
          <li>Banner | Flyer | Flex Design</li>
          <li>Wedding Card | Invitation Card</li>
          <li>Advertising Post design | Bill book invoice</li>
          <li>Social Media Post Design</li>
          <p className="bold">All Types Of Designing Available</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
