import React, { useState } from "react";

const Admin = ({ all, axios, getAll }) => {
  const [loading, setloading] = useState(false);

  const [insert, setInsert] = useState({
    desc: "",
    post_url: "",
    image: "",
    title: "",

    type: "",
  });

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => setInsert({ ...insert, image: reader.result });
  };

  const [update, setUpdate] = useState({
    desc: "",
    post_url: "",
    image: "",
    title: "",
    type: "",
  });

  const [updateId, setUpdateId] = useState("");

  const handleUpdateImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => setUpdate({ ...update, image: reader.result });
  };

  const Insert = async (e) => {
    setloading(true);
    e.preventDefault();
    await axios.post("/new", { insert });
    setloading(false);
    getAll();
  };

  const Update = async (e) => {
    setloading(true);
    e.preventDefault();
    await axios.post("/update", { update, updateId });
    setloading(false);
    getAll();
  };

  return (
    <div className="container my-5 text-dark" id="admin">
      {loading && (
        <div
          style={{ zIndex: 3 }}
          className="position-fixed start-0 top-0 fs-1 w-100 h-100 d-flex justify-content-center align-items-center bg-dark text-light"
        >
          Loading
        </div>
      )}

      <div className="records">
        <h1 className="ids_h1 mx-auto px-2">IDs</h1>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h3 className="text-center">All Types</h3>
            {all.map((all) => {
              return (
                <div key={all._id} className="text-center">
                  {all.title}: {all._id}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row">
        <h1 className="admin_h1 mx-auto">Admin</h1>
        <div className="col-md-6 col-12 my-3">
          <h2>Insert</h2>
          <form onSubmit={Insert}>
            <input
              placeholder="Title"
              value={insert.title}
              onChange={(e) => setInsert({ ...insert, title: e.target.value })}
              type="text"
              className="form-control mb-2"
              required
            />
            <input
              placeholder="Description"
              value={insert.desc}
              onChange={(e) => setInsert({ ...insert, desc: e.target.value })}
              type="text"
              className="form-control mb-2"
              required
            />
            <input
              placeholder="Post Url"
              value={insert.post}
              onChange={(e) =>
                setInsert({ ...insert, post_url: e.target.value })
              }
              type="text"
              className="form-control mb-2"
              required
            />
            <input
              onChange={handleImage}
              type="file"
              className="form-control mb-2"
              required
            />
            <select
              className="form-control mb-2"
              onChange={(e) => setInsert({ ...insert, type: e.target.value })}
            >
              <option value="">Select Category</option>
              <option value="poster">Poster</option>
              <option value="thumbnail">Thumbnail</option>
              <option value="graphic">Graphic Design</option>
            </select>
            <button className="btn btn-success" type="submit">
              Insert
            </button>
          </form>
        </div>
        <div className="col-md-6 col-12 my-3">
          <h2>Update</h2>
          <form onSubmit={Update}>
            <input
              value={updateId}
              onChange={(e) => setUpdateId(e.target.value)}
              placeholder="Id"
              type="text"
              className="form-control mb-2"
              required
            />
            <input
              value={update.title}
              onChange={(e) => setUpdate({ ...update, title: e.target.value })}
              placeholder="New Title"
              type="text"
              className="form-control mb-2"
            />
            <input
              value={update.desc}
              onChange={(e) => setUpdate({ ...update, desc: e.target.value })}
              placeholder="New Description"
              type="text"
              className="form-control mb-2"
            />
            <input
              value={update.post}
              onChange={(e) =>
                setUpdate({ ...update, post_url: e.target.value })
              }
              placeholder="New Post Url"
              type="text"
              className="form-control mb-2"
            />
            <input
              onChange={handleUpdateImage}
              type="file"
              className="form-control mb-2"
            />

            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
