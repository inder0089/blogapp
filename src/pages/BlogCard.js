import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import postimg from "../assets/images/post-1.jpg";
import axios from "axios";
import Shimmer from "../common/Shimmer";
import UserContext from "../utils/UserContext";
function BlogCard() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setLoading(true);
    const loadPost = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      setPosts(response.data);
      setLoading(false);
    };
    loadPost();
  }, []);

  const newUser = useContext(UserContext);
  const { name, email } = newUser;
  // console.log("inderjeet singh2", newUser);
  return (
    <>
      {loading ? (
        <Shimmer />
      ) : (
        posts.map((item) => (
          <div key={item.id} className="col-xs-12 col-md-4">
            <Card>
              <Card.Img variant="top" src={postimg} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.body}</Card.Text>
                <h6>{newUser.user.email}</h6>
                <Link to={`/blogDetail/${item.id}`}>Read More</Link>
              </Card.Body>
            </Card>
          </div>
        ))
      )}
    </>
  );
}

export default BlogCard;
