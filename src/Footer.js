import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-dark text-light py-2 position-relative">
       <svg
        style={{ zIndex: -1 }}
        className="position-absolute footerSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#212529"
          fillOpacity="1"
          d="M0,224L24,208C48,192,96,160,144,160C192,160,240,192,288,208C336,224,384,224,432,192C480,160,528,96,576,90.7C624,85,672,139,720,160C768,181,816,171,864,186.7C912,203,960,245,1008,234.7C1056,224,1104,160,1152,149.3C1200,139,1248,181,1296,208C1344,235,1392,245,1416,250.7L1440,256L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
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
        <br />
        &copy; MrAkEditing.2022
      </p>
    </footer>
  );
};

export default Footer;
