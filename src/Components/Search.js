import React from "react";

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

function Search() {
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
                    className="rounded-start"
                    placeholder="Search City..."
                  />
                  <InputGroupText className="bg-light p-0">
                    <Button
                      type="button"
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
