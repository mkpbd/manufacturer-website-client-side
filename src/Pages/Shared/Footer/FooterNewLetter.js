import React from "react";
import { Button, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";

const FooterNewLetter = () => {
  return (
    <div className="bg-primary-color px-0 mx-0 text-light py-5">
      <Container>
         <Row>
          <Col md="2">
        <h2>Newsletter</h2>
      </Col>
      <Col md="3">
        <p className="text-light">
          Enter Your Email And Well Send You A Coupon With 10 Off Your Next
          Order
        </p>
      </Col>
      <Col md="7">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button style={{background:"#3B3B3B"}} id="basic-addon2">Subscribe</Button>
        </InputGroup>
      </Col>
          </Row>
      </Container>
      </div>
   
  );
};

export default FooterNewLetter;
