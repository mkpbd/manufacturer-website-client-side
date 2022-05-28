import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import useItems from "../../custom_hooks/useItems";
import useReview from '../../custom_hooks/useReview';
import { FaStar } from 'react-icons/fa';
const Review = () => {
  
  const {  isLoading, isError, data, error } = useReview()


  if(isError){
    return <h2 className="text-danger">{error.message}</h2>
  }
  if (isLoading) {
    return <Loading></Loading>;
  }


   console.log("data  for revies ", data?.reverse());


  return (
    <Container className="py-5 my-5 bg-light">
      <Carousel nextIcon='' prevIcon='' variant="dark" indicatorLabels="dfadsfas">
        {data?.slice(0,3)?.map((d) => (
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
                  <h4 className="text-primary my-2">{d.review}</h4>
                  <p className="text-dark">{(d.rating == 1 ?<>
                    <FaStar className="text-success h3"></FaStar>
  
                  </> : d.rating == 2 ? <>
                  <FaStar className="text-success h3"></FaStar>
                  <FaStar className="text-success h3"></FaStar>
                  </> :  d.rating == 3 ? <>
                  <FaStar className="text-success h3"></FaStar>
                  <FaStar className="text-success h3"></FaStar>
                  <FaStar className="text-success h3"></FaStar>
                  </> : 
                   d.rating == 4 ? <>
                   <FaStar className="text-success h3"></FaStar>
                   <FaStar className="text-success h3"></FaStar>
                   <FaStar className="text-success h3"></FaStar>
                   <FaStar className="text-success h3"></FaStar>
                   </>
                  :  d.rating == 5 ? <>
                  <FaStar className="text-success h3"></FaStar>
                  <FaStar className="text-success h3"></FaStar>
                  <FaStar className="text-success h3"></FaStar>
                  <FaStar className="text-success h3"></FaStar>
                  <FaStar className="text-success h3"></FaStar>
                  </>: '')}</p>
                  <h4 className="text-dark"> {d.userName}</h4>
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
