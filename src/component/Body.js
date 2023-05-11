import React from "react";
import Slider from "../common/Slider";

import BlogCard from "../pages/BlogCard";
// import Banner from "./Banner";
// import Footer from "./Footer";
// import Header from "./Header";
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";
const slider = [
  {
    bannerImg: banner1,
    title: "First slide label",
    discription: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    bannerImg: banner2,
    title: "Second slide label",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    bannerImg: banner3,
    title: "Third slide label",
    discription:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

function Body() {
  return (
    <>
      {/* <Header /> */}
      <Slider sliderData={slider} id="inder" />

      <section className="block-card">
        <div className="container">
          <div className="row">
            <h1 className="my-4 text-center">Blog</h1>
            <BlogCard />
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Body;
