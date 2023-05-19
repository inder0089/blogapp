import React, { useState } from "react";
const AddBlog = () => {
  const [addBlog, setAddBlog] = useState({
    title: "",
    discription: "",
  });
  const addBlogData = (e) => {
    const { name, value } = e?.target;
    setAddBlog({ ...addBlog, [name]: value });
  };

  const submitData = (e) => {
    e?.preventDefault();
    console.log(addBlog);
  };

  return (
    <>
      <div className="blog-upload">
        <div className="container">
          <h1 className="text-center">Blog Upload</h1>
          <div className="w-50 m-auto">
            <form onClick={submitData}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={addBlog.title}
                  onChange={addBlogData}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="discription"
                  value={addBlog.discription}
                  onChange={addBlogData}
                ></textarea>
              </div>
              {/* <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Default file input example
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div> */}
              <div className="mb-3 text-center">
                <button type="button" className="btn btn-secondary m-auto">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
