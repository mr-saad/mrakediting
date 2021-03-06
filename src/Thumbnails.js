import { useState } from "react";
import { ShowIt, HideIt } from "./Graphics";

const Thumbnails = ({ thumbnails, admin, axios, getAll }) => {
  const [loading, setLoading] = useState(false);

  const delItem = async (_id, public_id) => {
    setLoading(true);
    confirm("Are You Sure You Want To Delete?");
    await axios.post("/del", { _id, public_id });
    setLoading(false);
    getAll();
  };

  return (
    <div className="thumbnails-container" id="thumbnails">
      {loading && (
        <div
          style={{ zIndex: 5 }}
          className="position-fixed top-0 start-0 fs-1 w-100 h-100 d-flex justify-content-center align-items-center bg-dark text-light"
        >
          Loading
        </div>
      )}
      <h1 className="thumbnails_h1 mx-auto">Thumbnails</h1>
      <div className="thumbnails text-capitalize">
        {thumbnails.map((all) => {
          const { _id, image, post_url, desc, public_id } = all;
          return (
            <div className="thumbnail" key={_id}>
              <div className="thumb_img">
                <img
                  onTouchStart={(e) => ShowIt(e)}
                  onTouchEnd={(e) => HideIt(e)}
                  loading="lazy"
                  src={image}
                  alt="image"
                />
              </div>
              <div className="content">
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

export default Thumbnails;
