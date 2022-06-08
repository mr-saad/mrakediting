import { useEffect, useState } from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Thumbnails from "./Thumbnails";
import Admin from "./Admin";
import Posters from "./Posters";
import Axios from "axios";
import Pusher from "pusher-js";
import Graphics from "./Graphics";

const axios = Axios.create({
  baseURL: "https://mrakedits.herokuapp.com",
});

var pusher = new Pusher("d45ee330ac2261b51eef", {
  cluster: "ap2",
});

var channel = pusher.subscribe("ayans");

const App = () => {
  const [All, setAll] = useState([]);

  const [thumbnails, setThumbnails] = useState([]);
  const [posters, setPosters] = useState([]);
  const [graphics, setGraphics] = useState([]);

  const getAll = async () => {
    const res = (await axios.get("/all")).data;
    setAll(res);
    setThumbnails(res.filter((all) => all.type === "thumbnail"));
    setPosters(res.filter((all) => all.type === "poster"));
    setGraphics(res.filter((all) => all.type === "graphic"));
  };

  useEffect(() => {
    getAll();
  }, []);

  const admin = localStorage.getItem("admin") === "mrak1";

  channel.bind("my-event", (data) => {
    getAll();
  });

  return (
    <>
      <Navbar />
      <div className="main_div">
        <Header />
        <About />
        <Graphics
          graphics={graphics}
          axios={axios}
          admin={admin}
          getAll={getAll}
        />
        <Posters
          posters={posters}
          axios={axios}
          admin={admin}
          getAll={getAll}
        />
        <Thumbnails
          thumbnails={thumbnails}
          axios={axios}
          admin={admin}
          getAll={getAll}
        />
        {admin && <Admin axios={axios} all={All} getAll={getAll} />}
      </div>
      <Footer />
    </>
  );
};

export default App;
