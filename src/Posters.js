import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const Posters = ({ posters, axios, admin }) => {
  const [loading, setloading] = useState(false);
  const delItem = async (id, poster) => {
    setloading(true);
    console.log(id, poster);
    confirm("Are You Sure You Want To Delete?");
    await axios.post("/del", { id, poster: true });
    setloading(false);
  };
  return (
    <div className="mt-5">
      {loading && (
        <div className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center bg-dark text-light">
          Loading
        </div>
      )}

      <h1
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="700"
        data-aos-delay="300"
        className="posters_h1 text-dark mx-auto px-2 text-capitalize"
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
              data-aos-easing="ease"
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
    </div>
  );
};

export default Posters;
