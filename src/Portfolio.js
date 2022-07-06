import React, { useEffect, useState } from "react";
import Axios from "axios";
import Spinner from "react-spinners/ClimbingBoxLoader";
import { motion } from "framer-motion";

const axios = Axios.create({
  baseURL: "https://mrakedits.herokuapp.com",
});

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("graphic");
  const [filtered, setFiltered] = useState([]);
  const [All, setAll] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAll = async () => {
    try {
      const res = (await axios.get("/all")).data;
      setAll(res);
      setFiltered(res.filter((all) => all.type === "graphic"));
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    switch (selectedCategory) {
      case "graphic":
        setFiltered(All.filter((all) => all.type === "graphic"));
        break;
      case "thumbnail":
        setFiltered(All.filter((all) => all.type === "thumbnail"));
        break;
      case "poster":
        setFiltered(All.filter((all) => all.type === "poster"));
        break;
      default:
        setFiltered(All.filter((all) => all.type === "graphic"));
    }
  }, [selectedCategory]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="border">Portfolio</h1>
      <div className="filterContainer">
        <button
          onClick={() => setSelectedCategory("graphic")}
          className={`filterBtn ${selectedCategory === "graphic" && "active"}`}
        >
          Graphic Designs
        </button>
        <button
          onClick={() => setSelectedCategory("thumbnail")}
          className={`filterBtn ${
            selectedCategory === "thumbnail" && "active"
          }`}
        >
          Thumbnails
        </button>
        <button
          onClick={() => setSelectedCategory("poster")}
          className={`filterBtn ${selectedCategory === "poster" && "active"}`}
        >
          Posters
        </button>
      </div>
      {loading ? (
        <div className="loadingContainer">
          <Spinner color="#000" size={30} />
        </div>
      ) : (
        <div className="grid">
          {filtered.map((all) => {
            return (
              <div
                onContextMenu={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  return false;
                }}
                onClick={() => {
                  return;
                }}
                onTouchStart={(e) => e.target.classList.add("active")}
                onTouchEnd={(e) => e.target.classList.remove("active")}
                onTouchCancel={(e) => e.target.classList.remove("active")}
                key={all._id}
                className={`imgContainer ${all.type}`}
              >
                <img src={all.image} alt={all._id} />
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default Portfolio;
