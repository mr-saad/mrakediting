import { useEffect, useState } from "react";

const Header = () => {
  const [minHeight, setMinHeight] = useState(0);
  useEffect(() => {
    setMinHeight(innerHeight - document.querySelector("nav").offsetHeight - 32);
  }, []);

  return (
    <div className="header" style={{ minHeight }}>
      <h1>
       <span style={{fontSize:"calc(10vw+1rem)"}}>Ayan Khatri</span> <br />
        <span
          style={{
            WebkitTextStroke: "1px white",
            color: "rgba(0,0,0,0)",
            fontSize: "calc(8vw-1rem)"
          }}
        >
         Graphic Designer
        </span>{" "}
        <br />
      <span style={{fontSize:"calc(8vw-1rem)"}}>Freelancer</span>
      </h1>
      <figure>
        <img src="/ayan.webp" alt="Ayan Khatri" />
      </figure>
    </div>
  );
};

export default Header;
