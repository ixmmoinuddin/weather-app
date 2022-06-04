import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card, CardBody, CardText, CardTitle } from "reactstrap";

import "../../Assets/css/custome.css";

function WeeklyForecast() {
  const settings = {
    dots: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((item, id) => {
          return (
            <Card key={id} className="border-0">
              <CardBody className="border rounded mx-2">
                <CardTitle tag="h5">Weekly Forecast for: </CardTitle>
                <hr />
                <CardText>Current Tempreture: </CardText>
                <CardText>Weather Conditions: </CardText>
                <CardText>Highest Tempreture: </CardText>
                <CardText>Lowest Tempreture: </CardText>
              </CardBody>
            </Card>
          );
        })}
      </Slider>
    </div>
  );
}

export default WeeklyForecast;
