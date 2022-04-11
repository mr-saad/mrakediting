import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const Thumbnails = ({ thumbnails, admin, axios, getAll }) => {
  const [loading, setLoading] = useState(false);

  const delItem = async (id, public_id) => {
    setLoading(true);
    confirm("Are You Sure You Want To Delete?");
    await axios.post("/del", { id, public_id });
    setLoading(false);
    getAll();
  };

  return (
    <div className="mt-5" id="thumbnails">
      {loading && (
        <div
          style={{ zIndex: 5 }}
          className="position-fixed top-0 start-0 fs-1 w-100 h-100 d-flex justify-content-center align-items-center bg-dark text-light"
        >
          Loading
        </div>
      )}
      <h1
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="700"
        data-aos-delay="300"
        className="thumbnails_h1 text-dark mx-auto px-2 mt-5"
      >
        Thumbnails
      </h1>
      <div className="thumbnails text-capitalize">
        {thumbnails.map((all) => {
          const { _id, image, post_url, desc, public_id } = all;
          return (
            <div
              className="thumbnail"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="700"
              data-aos-delay="500"
              key={_id}
            >
              <div className="thumb_img">
                <img src={image} alt="image" />
                <div className="content">
                  <a target="_new" href={post_url}>
                    View Post
                  </a>
                </div>
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

export default Thumbnails;
