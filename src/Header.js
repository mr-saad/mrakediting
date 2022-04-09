import { useEffect, useRef, useState } from "react";
import Type from "typewriter-effect";

const Header = () => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(innerHeight - document.querySelector("nav").offsetHeight);
  }, []);
  const textRef = useRef();
  return (
    <div
      className="header"
      style={{
        minHeight: height,
      }}
    >
      <svg
        style={{ zIndex: -1 }}
        className="position-absolute start-0 bottom-0 svgShape"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#212529"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,176C960,213,1056,267,1152,256C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        style={{ zIndex: -1 }}
        className="position-absolute start-0 svgShape"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#212529"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,176C960,213,1056,267,1152,256C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div
        data-aos="fade-right"
        data-aos-easing="ease"
        data-aos-duration="1000"
        data-aos-delay="500"
        className="text-dark text-center"
        style={{ minHeight: 65, minWidth: 285 }}
        ref={textRef}
      >
        <Type
          onInit={(type) => {
            type.typeString("<h1>Hi, I'm Ayan Khatri</h1>").start();
            type
              .typeString(
                "<p class='mb-0 text-muted' style='font-size:1rem;'>Graphic Designer | Freelancer</p>"
              )
              .start();
          }}
          options={{
            cursorClassName: "d-none",
            autoStart: true,
          }}
        />
      </div>
      <img
        data-aos="fade-left"
        data-aos-easing="ease"
        data-aos-duration="1000"
        src="/images/ayan1000.png"
        className="ayanImg"
        alt="Ayan Khatri"
      />
    </div>
  );
};

export default Header;
