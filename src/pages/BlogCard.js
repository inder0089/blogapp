import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import postimg from "../assets/images/post-1.jpg";
function BlogCard() {
  return (
    <>
      <div className="col-xs-12 col-md-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={postimg} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default BlogCard;
