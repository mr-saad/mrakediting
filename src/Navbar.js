import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark p-0"
      id="nav"
    >
      <div className="container-fluid">
        <a className="navbar-brand py-0" href="/">
          <img src="/logo.png" alt="mrAKEdits" />
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
              <a className="nav-link" href="#posters">
                Posters
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#thumbnails">
                Thumbnails
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
