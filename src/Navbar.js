import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark p-0 position-relative"
      id="nav"
    >
      <svg
        style={{ zIndex: -1, top: innerWidth > 768 ? "70%" : open ? "93%" : "80%" }}
        className="position-absolute navSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#212529"
          fillOpacity="1"
          d="M0,224L24,208C48,192,96,160,144,160C192,160,240,192,288,208C336,224,384,224,432,192C480,160,528,96,576,90.7C624,85,672,139,720,160C768,181,816,171,864,186.7C912,203,960,245,1008,234.7C1056,224,1104,160,1152,149.3C1200,139,1248,181,1296,208C1344,235,1392,245,1416,250.7L1440,256L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
      <div className="container-fluid">
        <a className="navbar-brand py-0" href="/">
          <img src="images/logo.png" alt="mrAKEdits" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#graphics">
                Graphic Designs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#thumbnails">
                Thumbnails
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#posters">
                Posters
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.instagram.com/mrakediting/"
                target="_ayan"
              >
                Instagram
              </a>
            </li>
            {localStorage.getItem("admin") === "mrak1" && (
              <li className="nav-item">
                <a href="#admin" className="nav-link">
                  Admin
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
