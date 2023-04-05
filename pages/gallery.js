import Image from "next/image";
import React, { useEffect, useState } from "react";
import Spinner from "react-spinners/ClimbingBoxLoader";

const categories = ["Graphic Design", "Poster", "Thumbnail"];

const Gallery = ({ /* graphics, posters, thumbnails */ results }) => {
  const [selectedCategory, setSelectedCategory] = useState("Graphic Design");
  const [finals, setFinals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [minHeight, setMinHeight] = useState(0);

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
          results.filter(
            (all) => all.properties.Type.select.name === "Graphic Design"
          )
        );
    }
  }, [selectedCategory]);

  useEffect(
    () =>
      setMinHeight(innerHeight - document.querySelector("nav").clientHeight),
    []
  );

  return (
    <div style={{ minHeight }}>
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
                src={all.properties.Photo.files[0].file.url}
                alt={all.id}
                style={{ objectFit: "cover" }}
                fill
                placeholder="blur"
                blurDataURL={all.properties.Photo.files[0].file.url}
              />
            </div>
          );
        })}
      </div>
    </div>
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

  // const posters = (
  //   await notion.databases.query({
  //     database_id: process.env.NOTION_DATABASE_ID,
  //     filter: {
  //       property: "Type",
  //       select: {
  //         equals: "Poster",
  //       },
  //     },
  //   })
  // ).results;

  // const thumbnails = (
  //   await notion.databases.query({
  //     database_id: process.env.NOTION_DATABASE_ID,
  //     filter: {
  //       property: "Type",
  //       select: {
  //         equals: "Thumbnail",
  //       },
  //     },
  //   })
  // ).results;

  return {
    props: {
      results,
      // graphics,
      // posters,
      // thumbnails,
    },
  };
};
