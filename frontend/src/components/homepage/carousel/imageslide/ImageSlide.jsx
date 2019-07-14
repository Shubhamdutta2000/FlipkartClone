import React from "react";
import "./ImageSlide.css";
let ImageSlide = ({ url }) => {
  return (
    <div className="carousel-image center-align">
      <img className="carousel-img" src={url} alt="" />
    </div>
  );
};

export default ImageSlide;
