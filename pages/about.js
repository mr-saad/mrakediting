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
      <h2 style={{ marginBottom: "1rem", color: "#eee" }}>What I Do?</h2>
      <ul className="whatido" style={{ marginLeft: "1rem" }}>
        <li>YT Thumbnail | Poster | Retouching</li>
        <li>Logo | YT Cover | Lyrical Video</li>
        <li>Business Card | Visiting Card</li>
        <li>Banner | Flyer | Flex Design</li>
        <li>Wedding Card | Invitation Card</li>
        <li>Advertising Post design | Bill book invoice</li>
        <li>Social Media Post Design</li>
        <li style={{ listStyle: "none" }}>All Types Of Designing</li>
      </ul>
      <ul className="aboutPs" style={{ marginLeft: "1rem" }}>
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

        <li>
          Photoshop's powerful typography tools enable me to create captivating
          text treatments that convey messages with impact.
        </li>
      </ul>
    </motion.section>
  )
}

export default About
