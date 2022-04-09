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

const axios = Axios.create({
  baseURL: "https://mrakedits.herokuapp.com",
});

const App = () => {
  const [thumbnails, setThumbnails] = useState([]);
  const [posters, setPosters] = useState([]);

  const getThumbnails = async () => {
    const res = await axios.get("/thumbnails");
    setThumbnails(res.data);
  };
  const getPosters = async () => {
    const res = await axios.get("/posters");
    setPosters(res.data);
  };

  useEffect(() => {
    getThumbnails();
    getPosters();
  }, []);

  const admin = localStorage.getItem("admin") === "mrak1";

  var pusher = new Pusher("d45ee330ac2261b51eef", {
    cluster: "ap2",
  });

  var channel = pusher.subscribe("ayans");
  channel.bind("my-event", (data) => {
    getThumbnails();
    getPosters();
  });

  return (
    <>
      <Navbar />
      <div className="main_div container">
        <Header />
        <About />
        <Posters posters={posters} axios={axios} admin={admin} />
        <Thumbnails thumbnails={thumbnails} axios={axios} admin={admin} />
        {admin && (
          <Admin axios={axios} thumbnails={thumbnails} posters={posters} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
