import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const path = usePathname()

  return (
    <nav>
      <ul>
        <li>
          <Link
            style={{ paddingLeft: 0 }}
            className={`${path === "/" && "active"}`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${path === "/gallery" && "active"}`}
            href="/gallery"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link className={`${path === "/about" && "active"}`} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link
            className={`${path === "/contact" && "active"}`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
