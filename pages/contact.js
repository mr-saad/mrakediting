import { motion } from "framer-motion"
import { animations } from "./index"
import { FaPhoneAlt } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri"

import Link from "next/link"
const Contact = () => {
  return (
    <motion.section className="contact" {...animations}>
      <Link target="_blank" href="tel:919265749251" className="icon_container">
        <FaPhoneAlt style={{ marginRight: 5 }} /> Mobile Number: +91 92657 49251
      </Link>
      <Link
        target="_blank"
        href="mailto:mrakediting03@gmail.com"
        className="icon_container"
      >
        <SiGmail style={{ marginRight: 5 }} /> E-Mail: mrakediting03@gmail.com
      </Link>
      <Link
        target="_blank"
        href="https://instagram.com/mrakediting"
        className="icon_container"
      >
        <RiInstagramFill style={{ marginRight: 5 }} /> Instagram: @mrakediting
      </Link>
      <Link
        target="_blank"
        href="https://wa.me/+919265749251"
        className="icon_container"
      >
        <RiWhatsappFill style={{ marginRight: 5 }} /> WhatsApp: 9265749251
      </Link>
    </motion.section>
  )
}

export default Contact
