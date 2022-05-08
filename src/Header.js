import { useEffect, useState } from "react";
import Type from "typewriter-effect";

const Header = () => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(innerHeight - document.querySelector("nav").offsetHeight);
  }, []);

  return (
    <div className="header" style={{ minHeight: height - 32 }}>
      <div
        data-aos="fade"
        data-aos-easing="ease"
        data-aos-duration="1000"
        data-aos-delay="700"
        className="text-center"
        style={{ minHeight: 65, minWidth: 285 }}
      >
        <Type
          onInit={(type) => {
            type
              .typeString("<h1 class='atype'>Hi, I'm Ayan Khatri</h1>")
              .start();
            type
              .typeString(
                "<p class='mb-0' style='font-size:1rem; color:rgba(255,255,255,0.4)'>Graphic Designer | Freelancer</p>"
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
        data-aos="fade"
        data-aos-easing="ease"
        data-aos-duration="1000"
        src="/ayan1000.png"
        alt="Ayan Khatri"
      />
    </div>
  );
};

export default Header;
