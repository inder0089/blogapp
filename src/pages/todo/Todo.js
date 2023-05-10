import React from "react";
const Todo = () => {
  return (
    <>
      <div className="blog-upload">
        <div className="container">
          <h1 className="text-center">Blog Upload</h1>
          <div className="w-50 m-auto">
            <div class="mb-3">
              <label for="title" class="form-label">
                Title
              </label>
              <input type="text" class="form-control" id="title" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Description
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Default file input example
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div class="mb-3 text-center">
              <button type="button" class="btn btn-secondary m-auto">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
