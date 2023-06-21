import { motion } from "framer-motion"
import { animations } from "./index"
const About = () => {
  return (
    <motion.section {...animations} className="about">
      <div className="workGrid">
        <div className="workTile">
          <span className="bigTxt">3+ </span>
          <br />
          Years Experience
        </div>
        <div className="workTile">
          <span className="bigTxt">900+</span> <br />
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
        <p style={{ marginTop: 10 }}>All Types Of Designing</p>
      </ul>
      <ul className="aboutPs">
        <li>
          As a graphic designer, I harness the power of Photoshop to bring my
          creative visions to life.
        </li>
        <li>
          With Photoshop as my digital playground, I seamlessly manipulate and
          enhance images, pushing the boundaries of visual expression.
        </li>
        <li>
          From retouching photographs to creating stunning compositions,
          Photoshop is my trusted tool for achieving artistic perfection.
        </li>
        <li>
          The versatility of Photoshop empowers me to experiment with various
          effects, colors, and textures, breathing life into my designs.
        </li>
        With Photoshop, I can seamlessly remove imperfections, adjust lighting,
        and enhance the overall aesthetics of my artwork.
        <li>
          Photoshop's powerful typography tools enable me to create captivating
          text treatments that convey messages with impact.
        </li>
      </ul>
    </motion.section>
  )
}

export default About
