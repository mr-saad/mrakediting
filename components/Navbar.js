import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const path = usePathname()

  return (
    <nav>
      <Link href={"/"}>
        <Image alt="Ayan Khatri" src={"/ayan_new.jpg"} width={50} height={50} />
      </Link>
      <div className="divider"></div>
      <ul>
        <Link className={`${path === "/gallery" && "active"}`} href="/gallery">
          Gallery
        </Link>
        <Link className={`${path === "/about" && "active"}`} href="/about">
          About
        </Link>
        <Link className={`${path === "/contact" && "active"}`} href="/contact">
          Contact
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
