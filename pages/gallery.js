import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { animations } from "./index"

const categories = ["Poster", "Thumbnail", "Graphic Design"]

const Gallery = ({ results }) => {
  const [finals, setFinals] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selected, setSelected] = useState({})
  const [category, setCategory] = useState("Poster")
  const [showCategory, setShowCategory] = useState(false)

  useEffect(() => {
    switch (category) {
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
  }, [category])

  return (
    <motion.section {...animations} className="gallery-section">
      <div
        onClick={() => setShowCategory(prev => !prev)}
        className="filterContainer"
      >
        <span>{category}s</span>
        <span>&#8623;</span>
        {showCategory && (
          <div className="filterDropdown">
            {categories.map(all => (
              <button
                type="button"
                key={all}
                onClick={e => {
                  e.stopPropagation()
                  setShowCategory(false)
                  setCategory(all)
                }}
                style={{
                  width: "100%",
                  textAlign: "left"
                }}
                className={`btn ${category === all && "active"}`}
              >
                {all}s
              </button>
            ))}
          </div>
        )}
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
                  width={300}
                  height={300}
                  quality={40}
                  sizes="(max-width: 640px) 50vw, 33vw"
                  src={all.properties.Photo.files[0].file.url}
                  alt={all.id}
                  style={{
                    objectFit: "cover",
                    height: "auto",
                    borderRadius: ".3rem"
                  }}
                  placeholder="blur"
                  blurDataURL="/loading.svg"
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
            height: "auto"
          }}
          sizes="(max-width: 640px) 100vw, 40vw"
          alt={selected.id}
          width={300}
          height={300}
          src={selected.properties.Photo.files[0].file.url}
          placeholder="blur"
          blurDataURL="/loading.svg"
        />
        <Link className="btn" href={selected.properties.PostURL.url}>
          View Post&#8599;
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
