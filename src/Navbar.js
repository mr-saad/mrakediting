import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-0 position-relative" id="nav">
      <div className="container">
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
      <svg
        className="position-absolute navShape"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#111"
          d="M0,256L21.8,229.3C43.6,203,87,149,131,154.7C174.5,160,218,224,262,218.7C305.5,213,349,139,393,96C436.4,53,480,43,524,64C567.3,85,611,139,655,181.3C698.2,224,742,256,785,261.3C829.1,267,873,245,916,208C960,171,1004,117,1047,96C1090.9,75,1135,85,1178,112C1221.8,139,1265,181,1309,181.3C1352.7,181,1396,139,1418,117.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
    </nav>
  );
};

export default Navbar;
