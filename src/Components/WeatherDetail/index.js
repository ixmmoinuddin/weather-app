import React from "react";
import TodayForecast from "./TodayForecast";
import WeeklyForecast from "./WeeklyForecast";
import ForecastMapping from "./ForecastMapping";
import TempConverter from "./TempConverter";

import { Container, Row, Col } from "reactstrap";
import "../Assets/css/custome.css";

function WeatherDetail(props) {
  const { location, weatherInfo } = props;

  function dateBuilder(d) {

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    const date = [];

    for (let count = 0; count < 8; count++) {
      if (d.getDay() + count < 8) {
        date[count] = d.getDay() + count;
      }
    }

    return [
      days[date[0]],
      days[date[1]],
      days[date[2]],
      days[date[3]],
      days[date[4]],
      days[date[5]],
      days[date[6]],
      days[date[7]],
    ];
  }

  const date = dateBuilder(new Date());

  return (
    <Container fluid>
      <Row>
        <Col lg="6" md="6" sm="12">
          <TodayForecast
            date={date[0]}
            location={location}
            weatherInfo={weatherInfo}
          />
          <hr />
          <WeeklyForecast
            date={date}
            location={location}
            weatherInfo={weatherInfo}
          />
        </Col>
        <Col lg="6" md="6" sm="12">
          <ForecastMapping />
          <hr />
          <TempConverter />
        </Col>
      </Row>
    </Container>
  );
}

export default WeatherDetail;
