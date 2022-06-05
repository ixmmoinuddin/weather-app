import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card, CardBody, CardText, CardTitle } from "reactstrap";

import "../../Assets/css/custome.css";

function WeeklyForecast(props) {
  const { date, weatherInfo } = props;

  const settings = {
    dots: true,
    speed: 500,
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
    <div className="mb-5">
      <Slider {...settings}>
        {weatherInfo.daily.map((item, id) => {
          if (id !== 0) {
            return (
              <Card key={id} className="border-0">
                <CardBody className="border rounded text-center mx-2">
                  <CardTitle tag="h5">{date[id]}</CardTitle>
                  <img
                    className="d-inline-block"
                    src={
                      "https://openweathermap.org/img/wn/" +
                      weatherInfo.daily[id].weather[0].icon +
                      ".png"
                    }
                    alt={weatherInfo.daily[id].weather[0].main}
                  />
                  <CardText>
                    {new Date(item.dt * 1000).toLocaleDateString("en-US")}
                  </CardText>
                  <CardText>
                    <strong>
                      <span className="text-danger">
                        {Math.round(item.temp.max) || "--"}
                        <sup>°C</sup>
                      </span>
                      {" -- "}
                      <span className="text-info">
                        {Math.round(item.temp.min) || "--"}
                        <sup>°C</sup>
                      </span>
                    </strong>
                  </CardText>
                </CardBody>
              </Card>
            );
          }
        })}
      </Slider>
    </div>
  );
}

export default WeeklyForecast;
