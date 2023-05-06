import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"

import { motion } from "framer-motion"
import Spinner from "react-spinners/RingLoader"
import { animations } from "./index"

const categories = [, "Poster", "Thumbnail", "Graphic Design"]

const Gallery = ({ results }) => {
  const [selectedCategory, setSelectedCategory] = useState("Poster")
  const [finals, setFinals] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selected, setSelected] = useState({})

  useEffect(() => {
    switch (selectedCategory) {
      case "Graphic Design":
        setFinals(
          results.filter(
            (all) => all.properties.Type.select.name === "Graphic Design"
          )
        )
        break
      case "Poster":
        setFinals(
          results.filter((all) => all.properties.Type.select.name === "Poster")
        )

        break
      case "Thumbnail":
        setFinals(
          results.filter(
            (all) => all.properties.Type.select.name === "Thumbnail"
          )
        )

        break

      default:
        setFinals(
          results.filter((all) => all.properties.Type.select.name === "Poster")
        )
    }
  }, [selectedCategory])

  return (
    <motion.section {...animations} className="gallery-section">
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
              onClick={() => {
                setSelected(all)
                setShowModal(!showModal)
              }}
            >
              <Image
                priority={true}
                sizes="(max-width: 540px) 40vw,
                (max-width: 786px) 60vw,
                (max-width: 1200px) 80vw"
                quality={50}
                src={all.properties.Photo.files[0].file.url}
                alt={all.id}
                fill={true}
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL={all.properties.Photo.files[0].file.url}
              />
            </div>
          )
        })}
      </div>
      {showModal && <Modal selected={selected} setShowModal={setShowModal} />}
    </motion.section>
  )
}

const Modal = ({ selected, setShowModal }) => {
  const [load, setLoad] = useState(true)
  return (
    <div
      className="modal"
      onClick={() => {
        setShowModal(false)
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={"modal-img-container"}
      >
        {load && <Loader />}
        <Image
          onLoadingComplete={() => setLoad(false)}
          sizes="(max-width: 540px) 40vw,
          (max-width: 786px) 60vw,
          (max-width: 1200px) 80vw"
          className={selected.properties.Type.select.name}
          alt={selected.id}
          style={{ objectFit: "cover", width: "auto", height: "auto" }}
          width={200}
          height={200}
          src={selected.properties.Photo.files[0].file.url}
        />
        <Link href={selected.properties.PostURL.url}>View Post</Link>
      </div>
    </div>
  )
}

const Loader = () => {
  return (
    <div
      style={{ position: "absolute", marginTop: "1rem", marginLeft: "1rem" }}
    >
      <Spinner color="#262626" />
    </div>
  )
}

export default Gallery

export const getServerSideProps = async () => {
  const { Client } = await import("@notionhq/client")
  const notion = new Client({ auth: process.env.NOTION_TOKEN })

  const results = (
    await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    })
  ).results

  return {
    props: {
      results,
    },
  }
}
