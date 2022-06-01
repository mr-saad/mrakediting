import { useEffect, useState } from "react";

const Header = () => {
  const [minHeight, setMinHeight] = useState(0);
  useEffect(() => {
    setMinHeight(innerHeight - document.querySelector("nav").offsetHeight - 32);
  }, []);

  return (
    <div className="header" style={{ minHeight }}>
      <h1>
        Ayan Khatri <br />
        <span
          style={{
            WebkitTextStroke: "1px white",
            color: "rgba(0,0,0,0)",
          }}
        >
          Freelance
        </span>{" "}
        <br />
        Designer
      </h1>
      <figure>
        <img src="/ayan.webp" alt="Ayan Khatri" />
      </figure>
    </div>
  );
};

export default Header;
