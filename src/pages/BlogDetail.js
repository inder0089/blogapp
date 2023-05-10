import React from "react";
import banner from "../assets/images/post-1.jpg";
const BlogDetail = () => {
  return (
    <>
      <div className="detailblog">
        <div className="detailbanner">
          <img
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
            src={banner}
          />
        </div>
        <div className="blog-content py-4">
          <div className="container">
            <h1>Heading</h1>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
