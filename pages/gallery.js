import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { animations } from "./index"

const categories = ["Poster", "Thumbnail", "Graphic Design"]

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
            all => all.properties.Type.select.name === "Graphic Design"
          )
        )
        break
      case "Poster":
        setFinals(
          results.filter(all => all.properties.Type.select.name === "Poster")
        )

        break
      case "Thumbnail":
        setFinals(
          results.filter(all => all.properties.Type.select.name === "Thumbnail")
        )

        break

      default:
        setFinals(
          results.filter(all => all.properties.Type.select.name === "Poster")
        )
    }
  }, [selectedCategory])

  return (
    <motion.section {...animations} className="gallery-section">
      <div className="filterContainer">
        {categories.map(all => (
          <button
            key={all}
            onClick={() => setSelectedCategory(all)}
            className={`btn ${selectedCategory === all && "active"}`}
          >
            {all}s
          </button>
        ))}
      </div>

      <div className="grid">
        {finals.length > 0
          ? finals.map(all => {
              return (
                <Image
                  key={all.id}
                  onClick={() => {
                    setSelected(all)
                    setShowModal(!showModal)
                  }}
                  className={`${all.properties.Type.select.name}`}
                  width={300}
                  height={300}
                  quality={40}
                  sizes="(max-width: 640px) 50vw, 33vw"
                  src={all.properties.Photo.files[0].file.url}
                  alt={all.id}
                  style={{
                    objectFit: "cover",
                    height: "auto",
                    backgroundImage: "unset"
                  }}
                />
              )
            })
          : "No Posts"}
      </div>
      {showModal && <Modal selected={selected} setShowModal={setShowModal} />}
    </motion.section>
  )
}

const Modal = ({ selected, setShowModal }) => {
  return (
    <div
      className="modal"
      onClick={() => {
        setShowModal(false)
      }}
    >
      <div onClick={e => e.stopPropagation()} className={"modal-img-container"}>
        <Image
          quality={100}
          style={{
            objectFit: "contain",
            height: "auto",
            backgroundImage: "unset"
          }}
          sizes="(max-width: 640px) 100vw, 40vw"
          className={selected.properties.Type.select.name}
          alt={selected.id}
          width={300}
          height={300}
          src={selected.properties.Photo.files[0].file.url}
        />
        <Link className="btn" href={selected.properties.PostURL.url}>
          View Post
        </Link>
      </div>
    </div>
  )
}

export default Gallery

export const getStaticProps = async () => {
  const notion = new (await import("@notionhq/client")).Client({
    auth: process.env.NOTION_TOKEN
  })
  const results = (
    await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID
    })
  ).results

  return {
    props: {
      results
    },
    revalidate: 60
  }
}
