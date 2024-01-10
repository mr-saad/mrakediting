import { motion } from "framer-motion"
import { animations } from "../components/animations"
import { FaPhoneAlt } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri"

import Link from "next/link"
const Contact = () => {
  return (
    <motion.section className="contact" {...animations}>
      <Link target="_blank" href="tel:919265749251">
        <FaPhoneAlt style={{ marginRight: 5 }} />
        Mobile Number: <span>+91 92657 49251</span>
      </Link>
      <Link target="_blank" href="mailto:mrakediting03@gmail.com">
        <SiGmail style={{ marginRight: 5 }} />
        E-Mail: <span>mrakediting03@gmail.com</span>
      </Link>
      <Link target="_blank" href="https://instagram.com/mrakediting">
        <RiInstagramFill style={{ marginRight: 5 }} />
        Instagram: <span>@mrakediting</span>
      </Link>
      <Link target="_blank" href="https://wa.me/+919265749251">
        <RiWhatsappFill style={{ marginRight: 5 }} />
        WhatsApp: <span>+91 9265749251</span>
      </Link>
    </motion.section>
  )
}

export default Contact
