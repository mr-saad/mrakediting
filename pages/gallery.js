import Image from "next/image";
import React, { useEffect, useState } from "react";
import Spinner from "react-spinners/ClimbingBoxLoader";

const categories = ["Graphic Design", "Poster", "Thumbnail"];

const Gallery = ({ graphics, posters, thumbnails }) => {
  const [selectedCategory, setSelectedCategory] = useState("Graphic Design");
  const [finals, setFinals] = useState(graphics);
  const [loading, setLoading] = useState(false);
  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    switch (selectedCategory) {
      case "Graphic Design":
        setFinals(graphics);
        break;
      case "Poster":
        setFinals(posters);
        break;
      case "Thumbnail":
        setFinals(thumbnails);
        break;

      default:
        setFinals(graphics);
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
      {loading ? (
        <div className="loadingContainer">
          <Spinner color="#000" size={30} />
        </div>
      ) : (
        <div className="grid">
          {finals.map((all) => {
            return (
              <div
                // onContextMenu={(e) => {
                //   e.preventDefault();
                //   e.stopPropagation();
                //   return false;
                // }}
                // onClick={() => {
                //   return;
                // }}
                // onTouchStart={(e) => e.target.classList.add("active")}
                // onTouchEnd={(e) => e.target.classList.remove("active")}
                // onTouchCancel={(e) => e.target.classList.remove("active")}
                key={all.id}
                className={`imgContainer ${all.properties.Type.select.name}`}
              >
                <Image
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                  fill
                  placeholder="blur"
                  blurDataURL={all.properties.Photo.files[0].file.url}
                  src={all.properties.Photo.files[0].file.url}
                  alt={all.id}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Gallery;

import { Client } from "@notionhq/client";
const notion = new Client({ auth: process.env.NOTION_TOKEN });

export const getServerSideProps = async () => {
  const graphics = (
    await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: "Type",
        select: {
          equals: "Graphic Design",
        },
      },
    })
  ).results;

  const posters = (
    await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: "Type",
        select: {
          equals: "Poster",
        },
      },
    })
  ).results;

  const thumbnails = (
    await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: "Type",
        select: {
          equals: "Thumbnail",
        },
      },
    })
  ).results;

  return {
    props: {
      graphics,
      posters,
      thumbnails,
    },
  };
};
