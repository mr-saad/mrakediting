import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const path = usePathname()
  return (
    <nav>
      <ul>
        <li>
          <Link
            prefetch={false}
            style={{ paddingLeft: 0 }}
            className={`${path === "/" && "active"}`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            prefetch={false}
            className={`${path === "/gallery" && "active"}`}
            href="/gallery"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            prefetch={false}
            className={`${path === "/about" && "active"}`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            prefetch={false}
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
