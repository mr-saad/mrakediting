import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-dark text-light py-2">
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
