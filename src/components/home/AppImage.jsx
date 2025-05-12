import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AppImage = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pt-10">
      <div className="slider-container px-20">
        <Slider {...settings}>
          <div className="w-full">
            <img src="/bkash3.jpg" alt="" />
          </div>
          <div className="w-full px-6">
            <img src="/bkash4.jpg" alt="" />
          </div>
          <div className="w-full ">
            <img src="/bkash6.png" alt="" />
          </div>
          <div className="w-full px-6">
            <img src="/bkash7.jpg" alt="" />
          </div>
          <div className="w-full">
            <img src="/bkash8.jpeg" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AppImage;
