import React from "react";
import TodayForecast from "./TodayForecast";
import WeeklyForecast from "./WeeklyForecast";
import ForecastMapping from "./ForecastMapping";
import TempConverter from "./TempConverter";

import { Container, Row, Col } from "reactstrap";

function WeatherDetail(props) {
  const { location, weatherInfo } = props;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  return (
    <Container fluid>
      <Row>
        <Col lg="6" md="6" sm="12">
          <TodayForecast days={days} location={location} weatherInfo={weatherInfo} />
          <hr />
          <WeeklyForecast days={days} weatherInfo={weatherInfo} />
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
