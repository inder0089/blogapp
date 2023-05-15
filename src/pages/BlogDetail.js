import React, { useEffect, useState } from "react";
import banner from "../assets/images/post-1.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const param = useParams();

  // console.log("param", param.id);

  const [post, setPost] = useState(null);

  useEffect(() => {
    const post = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${param.id}`
      );
      setPost(response.data);
    };
    post();
  }, []);

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
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
