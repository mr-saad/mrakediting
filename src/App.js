import React from "react";
import About from "./About";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Navbar from "./Navbar";

import { AnimatePresence } from "framer-motion";

import Pusher from "pusher-js";

import { Routes, Route, useLocation } from "react-router-dom";

var pusher = new Pusher("d45ee330ac2261b51eef", {
  cluster: "ap2",
});

var channel = pusher.subscribe("ayans");

const App = () => {
  const location = useLocation();
  // const admin = localStorage.getItem("admin") === "mrak1";

  channel.bind("my-event", (data) => {
    getAll();
  });

  return (
    <>
      <Navbar />
      <div className="main_div" style={{ minHeight: innerHeight - 32 }}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Header />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
