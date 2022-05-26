import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useItems from "../../custom_hooks/useItems";
import Loading from "../Loading/Loading";
import SingleItem from "./SingleItem";

const Parts = () => {
  const {data, isLoading} = useItems();
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <Container className="my-5">
        <h2 className="text-center display-3 py-4">Bicycle parts</h2>
      <Row md={3} sm={2}>
       {data?.slice(0,6).map(ds => (<Col key={ds._id}><SingleItem item={ds}></SingleItem></Col>))
       
       }


       
     
      </Row>
    </Container>
  );
};

export default Parts;
