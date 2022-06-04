import React from "react";

import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import "../../Assets/css/custome.css";

function TodayForecast() {
  return (
    <div className="d-flex flex-lg-row flex-md-row flex-sm-column">
      <div className="flex-fill order-lg-1 order-md-1 order-2">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Today's Forecast for: </CardTitle>
            <hr />
            <CardText>Current Tempreture: </CardText>
            <CardText>Weather Conditions: </CardText>
            <CardText>Highest Tempreture: </CardText>
            <CardText>Lowest Tempreture: </CardText>
          </CardBody>
        </Card>
      </div>
      <div className="d-flex order-lg-2 order-md-2 order-1">
        <img src="https://via.placeholder.com/150" alt="" />
      </div>
    </div>
  );
}

export default TodayForecast;
