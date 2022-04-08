import React, { useState } from "react";

const Admin = ({ thumbnails, posters, axios }) => {
  const [insert, setInsert] = useState({
    desc: "",
    post_url: "",
    image: "",
    title: "",
    likes: 0,
  });
  const [isPoster, setIsPoster] = useState(false);
  const [isUpdatePoster, setIsUpdatePoster] = useState(false);

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
    likes: 0,
  });

  const [updateId, setUpdateId] = useState("");

  const handleUpdateImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => setUpdate({ ...update, image: reader.result });
  };

  const Insert = async (e) => {
    e.preventDefault();
    await axios.post("/new", { insert, isPoster });
  };

  const Update = async (e) => {
    e.preventDefault();
    await axios.post("/update", { update, isUpdatePoster, updateId });
  };

  return (
    <div className="container my-5" id="admin">
      <div className="records">
        <h1 className="ids_h1">IDs</h1>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center">Thumbnails</h3>
            {thumbnails.map((all) => {
              return (
                <div key={all._id} className="text-center">
                  {all.title}: {all._id}
                </div>
              );
            })}
          </div>
          <div className="col-md-6">
            <h3 className="text-center">Posters</h3>
            {posters.map((all) => {
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
        <h1 className="admin_h1">Admin</h1>
        <div className="col-md-6 col-12 my-3">
          <h2>Insert</h2>
          <form onSubmit={Insert}>
            <label>Poster:</label>
            <input
              type="checkbox"
              onChange={(e) => setIsPoster(e.target.checked)}
            />
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
            <input
              placeholder="Likes"
              value={insert.likes}
              onChange={(e) => setInsert({ ...insert, likes: e.target.value })}
              type="number"
              className="form-control mb-2"
              required
            />
            <button className="btn btn-success" type="submit">
              Insert
            </button>
          </form>
        </div>
        <div className="col-md-6 col-12 my-3">
          <h2>Update</h2>
          <form onSubmit={Update}>
            <label>Poster:</label>
            <input
              type="checkbox"
              onChange={(e) => setIsUpdatePoster(e.target.checked)}
            />
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
            <input
              value={update.likes}
              onChange={(e) => setUpdate({ ...update, likes: e.target.value })}
              placeholder="New Likes"
              type="number"
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
