import TypeIt from "typeit-react";

const Header = () => {
  return (
    <div className="header" style={{ height: window.innerHeight - 79 }}>
      <div className="text-dark">
        <TypeIt
          options={{
            strings: [
              "<h1>Hi, I'm Ayan Khatri.</h1>",
              "<p class='mb-0'>Graphic Designer, Photoshop Artist.</p>",
            ],
            speed: 100,
            waitUntilVisible: true,
            lifeLike: true,
            cursor: false,
          }}
        />
      </div>
      <img src="/images/ayan1000.png" alt="Ayan Khatri" />
    </div>
  );
};

export default Header;
