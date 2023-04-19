import Image from "next/image";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { animations } from "./index";

const categories = [, "Poster", "Thumbnail", "Graphic Design"];

const Gallery = ({ results }) => {
  const [selectedCategory, setSelectedCategory] = useState("Poster");
  const [finals, setFinals] = useState([]);

  useEffect(() => {
    switch (selectedCategory) {
      case "Graphic Design":
        setFinals(
          results.filter(
            (all) => all.properties.Type.select.name === "Graphic Design"
          )
        );
        break;
      case "Poster":
        setFinals(
          results.filter((all) => all.properties.Type.select.name === "Poster")
        );

        break;
      case "Thumbnail":
        setFinals(
          results.filter(
            (all) => all.properties.Type.select.name === "Thumbnail"
          )
        );

        break;

      default:
        setFinals(
          results.filter((all) => all.properties.Type.select.name === "Poster")
        );
    }
  }, [selectedCategory]);



  return (
    <motion.section {...animations} className="gallery-section" >
      <div className="filterContainer">
        {categories.map((all) => (
          <button
            key={all}
            onClick={() => setSelectedCategory(all)}
            className={`filterBtn ${selectedCategory === all && "active"}`}
          >
            {all}s
          </button>
        ))}
      </div>

      <div className="grid">
        {finals.map((all) => {
          return (
            <div
              key={all.id}
              className={`imgContainer ${all.properties.Type.select.name}`}
            >
              <Image
                quality={50}
                src={all.properties.Photo.files[0].file.url}
                alt={all.id}
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL={all.properties.Photo.files[0].file.url}
              />
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Gallery;

import { Client } from "@notionhq/client";
const notion = new Client({ auth: process.env.NOTION_TOKEN });

export const getServerSideProps = async () => {
  const results = (
    await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    })
  ).results;


  return {
    props: {
      results,
    },
  };
};
