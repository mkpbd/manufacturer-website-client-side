import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button} from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe ('pk_test_51L4knSEpb7itOfoJrAI23z2bhHVos18P1hDg2yzSYE2ELBeQp9uHnmAMMwi7XG0vNrUSRI55wrehfsMttqckALO500HHjVY7yP');

const Payment = () => {
  const { id } = useParams();
 
  //  const { data:payment,isLoading, error, isError, isFetching} = useQuery(['payments',id, items], ()=>{
  //      axios.get(`http://localhost:5000/order/${id}`)
  //      .then(res =>{
  //         console.log('data', res.data)
  //             return res.data;
  //      } )

  //     // fetch(`http://localhost:5000/order/${id}`,{
  //     //     method:'GET',
  //     // }).then(res =>res.json()).then(data => data);
  //  })

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/order/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);
  //  console.log('isLoading', isLoading);
  //  console.log("payments", payment);

  if (!data) {
    return <Loading></Loading>;
  }

  return (
    <Container>
      <Row>
        <Col className="col-md-6 offset-md-3">
          <Card>
           
            <Card.Body className="text-center">
             <Card.Title className="my-2 text-success">Hello : {data.clientName}</Card.Title>
              <Card.Title>Item : {data.itemName}</Card.Title>
              <div className='mb-4' >
                    <h3 className="my-2">Price: {data.price} $</h3>
                    <h3 className="my-2">Quantity{data.quantity}</h3>
                    <h3 className="my">Total Price: {data?.totalPrice} $ </h3>
              </div>
              {/* <Button variant="primary" className="my-3">Pay</Button> */}
              <Elements stripe={stripePromise}>
                  <CheckoutForm payment={data}></CheckoutForm>
              </Elements>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
