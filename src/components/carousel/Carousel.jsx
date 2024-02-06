import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="carousel-slide">
        <img
          className="size"
          src="../src/assets/mb-auto-seite.jpg"
          alt="Slidew 1"
        />
      </div>
      <div className="carousel-slide">
        <img
          className="size"
          src="../src/assets/background-img.jpg"
          alt="222"
        />
      </div>
      <div className="carousel-slide">
        <img
          className="size"
          src="../src/assets/optimizing-img.jpg"
          alt="333333333"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
