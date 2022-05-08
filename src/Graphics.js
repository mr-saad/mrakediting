import React, { useState } from "react";

const Graphics = ({ graphics, admin, axios, getAll }) => {
  const [loading, setloading] = useState(false);

  const delItem = async (id, public_id) => {
    setloading(true);
    confirm("Are You Sure You Want To Delete?");
    await axios.post("/del", { id, public_id });
    setloading(false);
    getAll();
  };

  return (
    <div className="graphics-container" id="graphics">
      {loading && (
        <div
          style={{ zIndex: 3 }}
          className="position-fixed start-0 top-0 fs-1 w-100 h-100 d-flex justify-content-center align-items-center bg-dark text-light"
        >
          Loading
        </div>
      )}

      <h1
        data-aos="fade"
        data-aos-easing="ease"
        data-aos-duration="700"
        data-aos-delay="300"
        className="posters_h1 mx-auto"
      >
        Graphic Designs
      </h1>
      <div className="graphics text-capitalize">
        {graphics.map((all) => {
          const { desc, _id, image, post_url, public_id } = all;
          return (
            <div
              className="graphic"
              data-aos="fade"
              data-aos-easing="ease"
              data-aos-duration="700"
              data-aos-delay="500"
              key={_id}
            >
              <div className="thumb_img">
                <img loading="lazy" src={image} alt="image" />
                <a target="_new" href={post_url}>
                  View Post
                </a>
              </div>
              <div className="details">
                <p className="mb-0">{desc}</p>
                {admin && (
                  <button
                    onClick={() => delItem(_id, public_id)}
                    className="btn btn-danger mt-2"
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

export default Graphics;
