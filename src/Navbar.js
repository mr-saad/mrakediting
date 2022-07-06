import { NavLink, useLocation } from "react-router-dom";
import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { RiPhoneLine, RiPhoneFill } from "react-icons/ri";
import { AiOutlineBook, AiFillBook } from "react-icons/ai";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
     
        <NavLink to="/">
          {location.pathname === "/" ? <IoHomeSharp /> : <IoHomeOutline />}
        </NavLink>

        <NavLink to="/portfolio">
          {location.pathname === "/portfolio" ? (
            <AiFillBook />
          ) : (
            <AiOutlineBook />
          )}
        </NavLink>

        <NavLink to="/about">
          {location.pathname === "/about" ? <BsPersonFill /> : <BsPerson />}
        </NavLink>

        <NavLink to="/contact">
          {location.pathname === "/contact" ? <RiPhoneFill /> : <RiPhoneLine />}
        </NavLink>
      
    </nav>
  );
};

export default Navbar;
