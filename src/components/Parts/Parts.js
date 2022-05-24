import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleItem from "./SingleItem";

const Parts = () => {
  return (
    <Container className="my-5">
        <h2 className="text-center display-3 py-4">Bicyle parts</h2>
      <Row md={3}>
        <Col><SingleItem></SingleItem></Col>
        <Col><SingleItem></SingleItem></Col>
        <Col><SingleItem></SingleItem></Col>
     
      </Row>
    </Container>
  );
};

export default Parts;
