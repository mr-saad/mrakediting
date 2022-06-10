import { useEffect, useRef, useState } from "react";
import Type from "typewriter-effect";

const Header = () => {
  const shapeRef = useRef(null);
  const [shapeHeight, setShapeHeight] = useState(0);

  const [minHeight, setMinHeight] = useState(600);
  useEffect(() => {
    setShapeHeight(shapeRef.current.clientHeight - 3);

    setMinHeight(innerHeight - document.querySelector("nav").offsetHeight - 32);
  }, []);

  return (
    <div className="header" style={{ minHeight }}>
      <div
        className="typeContainer d-flex flex-column align-items-center"
        style={{ width: 292, height: 94 }}
      >
        <Type
          onInit={(type) => {
            type.typeString("<h1>Ayan Khatri</h1>").start();
          }}
          options={{ autoStart: true, cursorClassName: "d-none" }}
        />
        <Type
          onInit={(type) => {
            type
              .pauseFor(1700)
              .typeString("<p>Graphic Designer | Freelancer</p>")
              .start();
          }}
          options={{ autoStart: true, cursorClassName: "d-none" }}
        />
      </div>
      <figure>
        <img src="/ayan.webp" alt="Ayan Khatri" />
      </figure>
      <svg
        className="headerShape"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        ref={shapeRef}
      >
        <path
          fill="#111"
          d="M0,256L21.8,229.3C43.6,203,87,149,131,154.7C174.5,160,218,224,262,218.7C305.5,213,349,139,393,96C436.4,53,480,43,524,64C567.3,85,611,139,655,181.3C698.2,224,742,256,785,261.3C829.1,267,873,245,916,208C960,171,1004,117,1047,96C1090.9,75,1135,85,1178,112C1221.8,139,1265,181,1309,181.3C1352.7,181,1396,139,1418,117.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
      <svg
        style={{ transform: "rotate(180deg)", bottom: -shapeHeight }}
        className="headerShape"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#111"
          d="M0,256L21.8,229.3C43.6,203,87,149,131,154.7C174.5,160,218,224,262,218.7C305.5,213,349,139,393,96C436.4,53,480,43,524,64C567.3,85,611,139,655,181.3C698.2,224,742,256,785,261.3C829.1,267,873,245,916,208C960,171,1004,117,1047,96C1090.9,75,1135,85,1178,112C1221.8,139,1265,181,1309,181.3C1352.7,181,1396,139,1418,117.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Header;
