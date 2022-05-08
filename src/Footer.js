import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="d-flex flex-column gap-2">
        <a
          href="tel:919265749251"
          className="d-flex align-items-center text-decoration-none"
        >
          <FaPhoneAlt color="#b9b9e1" className="me-2" size={20} /> : 9265749251
          [AYAN KHATRI]
        </a>
        <a
          href="mailto:mrakediting03@gmail.com"
          className="d-flex align-items-center text-decoration-none"
        >
          <MdEmail color="#b9b9e1" className="me-2" size={20} /> :
          mrakediting03@gmail.com
        </a>
        <a
          href="https://wa.me/919265749251?text=Hello"
          className="d-flex align-items-center text-decoration-none"
        >
          <IoLogoWhatsapp color="#b9b9e1" className="me-2" size={20} /> :
          9265749251
        </a>
      </div>
      <p>
        <span
          onClick={() => {
            const get = prompt("Password: ");
            if (get === "mrak1") {
              localStorage.setItem("admin", "mrak1");
            } else if (get === "mrak1remove") {
              localStorage.removeItem("admin");
            } else {
              alert("You're Not An Admin!");
            }
          }}
        >
          All Rights Reserved
        </span>{" "}
        &copy;MrAkEditing.2022
      </p>
    </footer>
  );
};

export default Footer;
