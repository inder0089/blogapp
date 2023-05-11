import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import postimg from "../assets/images/post-1.jpg";
import axios from "axios";
function BlogCard() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const loadPost = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      setPosts(response.data);
      // setLoading(false);
    };
    loadPost();
  }, []);

  return (
    <>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        posts.map((item) => (
          <div key={item.id} className="col-xs-12 col-md-4">
            <Card>
              <Card.Img variant="top" src={postimg} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.body}</Card.Text>
                <Link to="/blogDetail">Read More</Link>
              </Card.Body>
            </Card>
          </div>
        ))
      )}
    </>
  );
}

export default BlogCard;
