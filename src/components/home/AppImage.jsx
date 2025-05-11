import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AppImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className="pt-10">
      <div className="slider-container flex flex-col gap-10 px-20">
        <Slider {...settings}>
          <div className="w-full ">
            <img src="/bkash3.jpg" alt="" />
          </div>
          <div className="w-full px-2">
            <img src="/bkash4.jpg" alt="" />
          </div>
          <div className="w-full px-2">
            <img src="/bkash6.png" alt="" />
          </div>
          <div className="w-full">
            <img src="/bkash7.jpg" alt="" />
          </div>
          <div className="w-full px-2">
            <img src="/bkash5.jpeg" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AppImage;
