import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  FormGroup,
  InputGroup,
  InputGroupText,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Assets/css/custome.css";

function Search({ searchCity }) {
  const [currentCity, setCurrentCity] = useState("");

  function handleInputChange(event) {
    setCurrentCity(event.target.value);
  }

  function handleButtonClick() {
    if (currentCity.trim() === "") return;
    searchCity(currentCity);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      return false;
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="search py-3">
            <Form>
              <FormGroup>
                <InputGroup>
                  <Input
                    type="text"
                    bsSize="lg"
                    id="searchcity"
                    name="searchcity"
                    value={currentCity}
                    className="rounded-start"
                    placeholder="Search City..."
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleKeyPress(e)}
                  />
                  <InputGroupText className="bg-light p-0">
                    <Button
                      type="button"
                      onClick={handleButtonClick}
                      className="btn btn-lg text-dark bg-light border-0"
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                  </InputGroupText>
                </InputGroup>
              </FormGroup>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
