import React, { useState } from "react";

import {
  Col,
  Row,
  Card,
  Form,
  Label,
  Input,
  CardBody,
  CardTitle,
  FormGroup,
} from "reactstrap";
import "../../Assets/css/custome.css";

function TempConverter() {
  const [temp, updateTemp] = React.useState({ c: 0, f: 32 });

  const updateC = (ev) =>
    updateTemp({
      c: ev.target.value,
      f: ((+ev.target.value * 9) / 5 + 32).toFixed(2),
    });

  const updateF = (ev) =>
    updateTemp({
      c: (((+ev.target.value - 32) * 5) / 9).toFixed(2),
      f: ev.target.value,
    });

  return (
    <div className="tempconverter">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Tempreture Converter</CardTitle>
          <hr />
          <Form>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Celsius</Label>
                  <Input type="number" value={temp.c} onChange={updateC} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Fahrenheit</Label>
                  <Input type="number" value={temp.f} onChange={updateF} />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default TempConverter;
