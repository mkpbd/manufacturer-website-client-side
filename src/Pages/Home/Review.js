import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import Loading from "../../components/Loading/Loading";
import useItems from "../../custom_hooks/useItems";

const Review = () => {
  const { isLoading, data } = useItems();

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <Container className="py-5 my-5 bg-light">
      <Carousel nextIcon='' prevIcon='' variant="dark" indicatorLabels="dfadsfas">
        {data.map((d) => (
          <Carousel.Item interval={2000} key={d._id}>
            <Row xm="1" md="2">
              <Col className="border-0 col-sm-4">
                <img
                  className="d-block"
                  style={{
                    width: "200px",
                    height: "200px",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                  }}
                  src={d.image}
                  alt={d.itemName}
                />
              </Col>
              <Col className="col-sm-8">
                <Carousel.Caption>
                  <h3 className="text-dark">{d.itemName}</h3>
                  <p className="text-dark">{d.title}</p>
                  <h4 className="text-dark"> Client Name</h4>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Review;
