import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: innerHeight }}
    >
      <div className="typeContainer">
        <h2 className="bold-700">Hi There!</h2>
        <h1 className="bold-900">
          I'm <span className="prism">Ayan Khatri</span>
        </h1>
        <p className="professionLabel">graphic designer / freelancer</p>
        <p className="justifyText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          nulla veritatis voluptates. Voluptas aspernatur quaerat dicta
          consectetur corporis id explicabo.
        </p>
        <Link to={"/about"} className="professionLabel">
          More About Me
        </Link>
      </div>
      <figure>
        <img src="/ayan.webp" alt="Ayan Khatri" />
      </figure>
    </motion.header>
  );
};

export default Header;
