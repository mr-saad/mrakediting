import React, { useState } from "react";

const Graphics = ({ graphics, admin, axios, getAll }) => {
  const [loading, setloading] = useState(false);

  const delItem = async (_id, public_id) => {
    setloading(true);
    const confirmIt = confirm("Are You Sure You Want To Delete?");
    confirmIt && (await axios.post("/del", { _id, public_id }));
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

      <h1 className="posters_h1 mx-auto">Graphic Designs</h1>
      <div className="graphics text-capitalize">
        {graphics.map((all) => {
          const { desc, _id, image, post_url, public_id } = all;
          return (
            <div className="graphic" key={_id}>
              <div onClick={(e) => console.dir(e.target)} className="thumb_img">
                <img
                  onTouchStart={(e) => ShowIt(e)}
                  onTouchEnd={(e) => HideIt(e)}
                  onTouchCancel={(e) => HideIt(e)}
                  loading="lazy"
                  src={image}
                  alt="image"
                />
              </div>

              <a target="_new" href={post_url}>
                View Post
              </a>
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

export const ShowIt = (e) => {
  document.body.style.overflow = "hidden";
  e.target.parentElement.classList.add("active");
};

export const HideIt = (e) => {
  document.body.style.overflow = "auto";
  e.target.parentElement.classList.remove("active");
};
