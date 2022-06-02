import { useEffect, useState } from "react";

const Header = () => {
  const [minHeight, setMinHeight] = useState(0);
  useEffect(() => {
    setMinHeight(innerHeight - document.querySelector("nav").offsetHeight - 32);
  }, []);

  return (
    <div className="header" style={{ minHeight }}>
      <h1>
       <span style={{fontSize:"11vw"}}>Ayan Khatri</span> <br />
        <span
          style={{
            WebkitTextStroke: "1px white",
            color: "rgba(0,0,0,0)",
            fontSize: "8vw"
          }}
        >
         Graphic Designer
        </span>{" "}
        <br />
      <span style={{fontSize:"8vw"}}>Freelancer</span>
      </h1>
      <figure>
        <img src="/ayan.webp" alt="Ayan Khatri" />
      </figure>
    </div>
  );
};

export default Header;
