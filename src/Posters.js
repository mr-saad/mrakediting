import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Posters = ({ posters, axios, admin }) => {
  const delItem = async (id, poster) => {
    console.log(id, poster);
    confirm("Are You Sure You Want To Delete?");
    await axios.post("/del", { id, poster: true });
  };
  return (
    <>
      <h1
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="700"
        className="posters_h1 text-dark mx-auto px-2"
        id="posters"
      >
        Posters
      </h1>
      <div className="posters">
        {posters.map((all) => {
          const { desc, _id, image, post_url, likes } = all;
          return (
            <div
              className="poster"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="700"
              data-aos-delay="500"
              key={_id}
            >
              <div className="thumb_img">
                <img src={image} alt="image" />
                <a target="_new" href={post_url}>
                  View Post
                </a>
              </div>
              <div className="details">
                {desc}
                <p className="mb-0">
                  Likes: <AiFillHeart /> {likes}
                </p>
                {admin && (
                  <button
                    onClick={() => delItem(_id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posters;
