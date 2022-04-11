import React, { useState } from "react";

const Posters = ({ posters, axios, admin, getAll }) => {
  const [loading, setloading] = useState(false);

  const delItem = async (id, public_id) => {
    setloading(true);
    confirm("Are You Sure You Want To Delete?");
    await axios.post("/del", { id, public_id });
    setloading(false);
    getAll();
  };

  return (
    <div className="mt-5" id="posters">
      {loading && (
        <div
          style={{ zIndex: 3 }}
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark text-light fs-1"
        >
          Loading
        </div>
      )}

      <h1
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="700"
        data-aos-delay="300"
        className="posters_h1 text-dark mx-auto px-2"
      >
        Posters
      </h1>
      <div className="posters text-capitalize">
        {posters.map((all) => {
          const { desc, _id, image, post_url, public_id } = all;
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
                <p className="mb-0">{desc}</p>
                {admin && (
                  <button
                    onClick={() => delItem(_id, public_id)}
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
