import { AiFillHeart } from "react-icons/ai";

const Thumbnails = ({ thumbnails, admin, axios }) => {
  const delItem = async (id) => {
    confirm("Are You Sure You Want To Delete?");
    await axios.post("/del", { id, poster: false });
  };

  return (
    <>
      <h1
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="700"
        className="thumbnails_h1 text-dark mx-auto px-2"
        id="thumbnails"
      >
        Thumbnails
      </h1>
      <div className="thumbnails">
        {thumbnails.map((all) => {
          const { _id, image, post_url, desc, likes } = all;
          return (
            <div
              className="thumbnail"
              data-aos="fade-up"
              data-aos-easing="linear"
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

export default Thumbnails;
