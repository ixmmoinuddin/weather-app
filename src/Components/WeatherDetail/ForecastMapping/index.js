import React, { useState } from "react";

import {
  Row,
  Col,
  Nav,
  Card,
  TabPane,
  NavItem,
  NavLink,
  CardBody,
  CardText,
  CardTitle,
  TabContent,
} from "reactstrap";
import classnames from "classnames";
import "../../Assets/css/custome.css";

function ForecastMapping() {
  const [currentActiveTab, setCurrentActiveTab] = useState("1");

  const toggle = (tab) => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };

  return (
    <div className="forecastmapping">
      <Nav>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === "1",
            })}
            onClick={() => {
              toggle("1");
            }}
          >
            Clouds
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === "2",
            })}
            onClick={() => {
              toggle("2");
            }}
          >
            Precipitation
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === "3",
            })}
            onClick={() => {
              toggle("3");
            }}
          >
            Tempreture
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={currentActiveTab}>
        <TabPane tabId="1">
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Weekly Forecast for: 1</CardTitle>
                  <hr />
                  <CardText>Current Tempreture: </CardText>
                  <CardText>Weather Conditions: </CardText>
                  <CardText>Highest Tempreture: </CardText>
                  <CardText>Lowest Tempreture: </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Weekly Forecast for: 2</CardTitle>
                  <hr />
                  <CardText>Current Tempreture: </CardText>
                  <CardText>Weather Conditions: </CardText>
                  <CardText>Highest Tempreture: </CardText>
                  <CardText>Lowest Tempreture: </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Weekly Forecast for: 3</CardTitle>
                  <hr />
                  <CardText>Current Tempreture: </CardText>
                  <CardText>Weather Conditions: </CardText>
                  <CardText>Highest Tempreture: </CardText>
                  <CardText>Lowest Tempreture: </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default ForecastMapping;
