import React from "react";
import Carousel from "react-bootstrap/Carousel";

// const Slider = (props) => {
const Slider = ({ sliderData, id }) => {
  //   console.log("inder", slider);

  //   console.log("fwafawa", id);

  return (
    <>
      {/* <img className="d-block w-100" src={img} alt="First slide" /> */}
      <Carousel>
        {/* {props.sliderData?.map((slide, id) => ( */}
        {sliderData?.map((slide, id) => (
          <Carousel.Item key={id}>
            <img
              className="d-block w-100"
              src={slide.bannerImg}
              alt={"slide" + id}
            />
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p>{slide.discription}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
