import React from "react";
import TodayForecast from "./TodayForecast";
import WeeklyForecast from "./WeeklyForecast";
import ForecastMapping from "./ForecastMapping";
import TempConverter from "./TempConverter";

import { Container, Row, Col } from "reactstrap";
import "../Assets/css/custome.css";

function WeatherDetail() {
  return (
    <Container fluid>
      <Row>
        <Col lg="6" md="6" sm="12">
          <TodayForecast />
          <hr />
          <WeeklyForecast />
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
