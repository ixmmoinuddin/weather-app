import React, { useState } from "react";

import { Card, CardBody, CardText, CardTitle, Collapse } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function TodayForecast(props) {
  const { days, location, weatherInfo } = props;
  const [toggleQuestion, setToggequestion] = useState(false);

  const dayNum = new Date(weatherInfo.current.dt * 1000).getDay();
  const dayName = days[dayNum];

  return (
    <div className="d-flex flex-lg-row flex-md-row flex-column border border-1 rounded p-2">
      <div className="flex-fill order-lg-1 order-md-1 order-2 border-end">
        <Card className="border-0">
          <CardBody>
            <CardTitle tag="h5">
              Today's Forecast for: <strong>{location.city || "--"}</strong>
            </CardTitle>
            <hr />
            <CardText className="d-flex justify-content-between">
              <span>Current Tempreture:</span>
              <span>
                <strong>
                  {Math.round(weatherInfo.current.temp) || "--"}
                  <sup>°C</sup>
                </strong>
              </span>
            </CardText>
            <CardText
              className="d-flex justify-content-between align-items-center"
              onClick={() => setToggequestion(!toggleQuestion)}
            >
              <span className="d-inline-block border rounded p-1 me-3">
                <FontAwesomeIcon
                  icon={toggleQuestion === true ? faChevronUp : faChevronDown}
                />
              </span>
              <span className="flex-fill">Weather Conditions:</span>
              <span>
                <strong>
                  {weatherInfo.current.weather[0].description || "--"}
                </strong>
              </span>
            </CardText>

            <Collapse isOpen={toggleQuestion} className="my-3">
              <Card>
                <CardBody>
                  <CardText className="d-flex justify-content-between">
                    <span>Wind Speed:</span>
                    <span>
                      <strong>
                        <small>
                          {`${weatherInfo.current.wind_speed} M/S` || "--"}
                        </small>
                      </strong>
                    </span>
                  </CardText>
                  <hr />
                  <CardText className="d-flex justify-content-between">
                    <span>Humidity:</span>
                    <span>
                      <strong>
                        <small>
                          {`${weatherInfo.current.humidity} %` || "--"}
                        </small>
                      </strong>
                    </span>
                  </CardText>
                  <hr />
                  <CardText className="d-flex justify-content-between">
                    <span>Pressure:</span>
                    <span>
                      <strong>
                        <small>
                          {`${weatherInfo.current.pressure} Pa` || "--"}
                        </small>
                      </strong>
                    </span>
                  </CardText>
                  <hr />
                  <CardText className="d-flex justify-content-between">
                    <span>Sun Rise:</span>
                    <span>
                      <strong>
                        <small>
                          {new Date(
                            weatherInfo.current.sunrise * 1000
                          ).getHours() +
                            ":" +
                            new Date(
                              weatherInfo.current.sunrise * 1000
                            ).getMinutes() || "--"}
                        </small>
                      </strong>
                    </span>
                  </CardText>
                  <hr />
                  <CardText className="d-flex justify-content-between">
                    <span>Sun Set:</span>
                    <span>
                      <strong>
                        <small>
                          {new Date(
                            weatherInfo.current.sunset * 1000
                          ).getHours() +
                            ":" +
                            new Date(
                              weatherInfo.current.sunset * 1000
                            ).getMinutes() || "--"}
                        </small>
                      </strong>
                    </span>
                  </CardText>
                </CardBody>
              </Card>
            </Collapse>

            <CardText className="d-flex justify-content-between">
              <span>Highest Tempreture:</span>
              <span>
                <strong>
                  {Math.round(weatherInfo.daily[0].temp.max) || "--"}
                  <sup>°C</sup>
                </strong>
              </span>
            </CardText>
            <CardText className="d-flex justify-content-between">
              <span>Lowest Tempreture:</span>
              <span>
                <strong>
                  {Math.round(weatherInfo.daily[0].temp.min) || "--"}
                  <sup>°C</sup>
                </strong>
              </span>
            </CardText>
          </CardBody>
        </Card>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center order-lg-2 order-md-2 order-1">
        <img
          src={
            "https://openweathermap.org/img/wn/" +
            weatherInfo.current.weather[0].icon +
            ".png"
          }
          width={120}
          height={120}
          alt={weatherInfo.current.weather[0].main || "--"}
        />
        <h3 className="text-center">
          {Math.round(weatherInfo.current.temp) || "--"}
          <sup>°C</sup>
        </h3>
        <h6>{dayName}</h6>
        <h6>
          {new Date(weatherInfo.current.dt * 1000).toLocaleDateString("en-US")}
        </h6>
        <h6>
          {location.city || "--"}, {location.country || "--"}
        </h6>
      </div>
    </div>
  );
}

export default TodayForecast;
