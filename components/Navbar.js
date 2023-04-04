import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav>
      <Link className={`${path === "/" && "active"}`} href="/">
        Home
      </Link>
      <Link className={`${path === "/gallery" && "active"}`} href="/gallery">
        Gallery
      </Link>
      <Link className={`${path === "/about" && "active"}`} href="/about">
        About
      </Link>
      <Link className={`${path === "/contact" && "active"}`} href="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
