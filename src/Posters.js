import React, { useState } from "react";
import { HideIt, ShowIt } from "./Graphics";

const Posters = ({ posters, axios, admin, getAll }) => {
  const [loading, setloading] = useState(false);

  const delItem = async (_id, public_id) => {
    setloading(true);
    confirm("Are You Sure You Want To Delete?");
    await axios.post("/del", { _id, public_id });
    setloading(false);
    getAll();
  };

  return (
    <div className="posters-container" id="posters">
      {loading && (
        <div
          style={{ zIndex: 3 }}
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark text-light fs-1"
        >
          Loading
        </div>
      )}

      <h1 className="posters_h1 mx-auto">Posters</h1>
      <div className="posters text-capitalize">
        {posters.map((all) => {
          const { desc, _id, image, post_url, public_id } = all;
          return (
            <div className="poster" key={_id}>
              <div className="thumb_img">
                <img
                  onTouchStart={(e) => ShowIt(e)}
                  onTouchEnd={(e) => HideIt(e)}
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

export default Posters;
