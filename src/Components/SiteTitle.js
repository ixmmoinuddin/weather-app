import React from "react";

import {Container, Row, Col} from 'reactstrap';

function SiteTitle() {
  return (
    <Container fluid>
        <Row>
            <Col>
                <div className="sitetitle text-center bg-light py-3">
                    <h2>The Weather App</h2>
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default SiteTitle;
