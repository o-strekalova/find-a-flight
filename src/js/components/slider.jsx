import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = (props) => {
  const {
    destinationImages,
    arrival
  } = props;

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {destinationImages.map((img, i) => {
        return (
          <li className="slider__item" key={i}>
            <img className="slider__image" src={img} alt={arrival.city} width="164" height="149"/>
          </li>
      )})}
    </Slider>
  );
};

export default React.memo(SimpleSlider);
