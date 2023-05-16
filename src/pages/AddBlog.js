import React from "react";
const AddBlog = () => {
  return (
    <>
      <div className="blog-upload">
        <div className="container">
          <h1 className="text-center">Blog Upload</h1>
          <div className="w-50 m-auto">
            <div className="mb-3">
              <label for="title" className="form-label">
                Title
              </label>
              <input type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label for="formFile" className="form-label">
                Default file input example
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="mb-3 text-center">
              <button type="button" className="btn btn-secondary m-auto">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
