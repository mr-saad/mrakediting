import { motion } from "framer-motion"
import { animations } from "./index"
import { FaPhoneAlt } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri"

import Link from "next/link"
const Contact = () => {
  return (
    <motion.section className="contact" {...animations}>
      <Link target="_blank" href="tel:919265749251" className="btn">
        <FaPhoneAlt style={{ marginRight: 5 }} /> Mobile Number: +91 92657 49251
      </Link>
      <Link
        target="_blank"
        href="mailto:mrakediting03@gmail.com"
        className="btn"
      >
        <SiGmail style={{ marginRight: 5 }} /> E-Mail: mrakediting03@gmail.com
      </Link>
      <Link
        target="_blank"
        href="https://instagram.com/mrakediting"
        className="btn"
      >
        <RiInstagramFill style={{ marginRight: 5 }} /> Instagram: @mrakediting
      </Link>
      <Link target="_blank" href="https://wa.me/+919265749251" className="btn">
        <RiWhatsappFill style={{ marginRight: 5 }} /> WhatsApp: +91 9265749251
      </Link>
    </motion.section>
  )
}

export default Contact
