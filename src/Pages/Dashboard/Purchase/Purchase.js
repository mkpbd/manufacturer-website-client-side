import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading/Loading";
import useItems from "../../../custom_hooks/useItems";
import auth from "../../../firebase.init";
import { useForm, Controller } from "react-hook-form";
const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  // console.log("params", useParams());
  const { isLoading, error, data, isFetching } = useItems();
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
    watch,
  } = useForm();


  if (error) {
    console.log(error);
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  // console.log("user", user);
  // console.log(id, 'Id')
  // console.log(data, " data ")

  const item = data?.filter((it) => it._id == id);

  // console.log(item, "items");



  // const {isLoading, error, data, isFetching } = useQuery('purchase-id',()=>{

  //     axios.get(
  //       "data/product.json"
  //     ).then((res) => {
  //        return  res.data

  // })


const handleUserPurchaseOrderSubmit = data => {
  

  // console.log("purchase data",data);

  const it = item[0];
  const orderItems = {
    productId: it._id,
    itemName: it.itemName,
    description: it.description,
    price:it.price,
    quantity: data.quantity,
    clientEmail: user.email,
    clientName: user.displayName,
    totalPrice: data.quantity * it.price,
    phoneNumber: data.phoneNumber, 
    address: data.address
  }

  // console.log("orders",orderItems)

  axios.post('https://mysterious-fortress-37861.herokuapp.com/order', orderItems).then(res =>{ 
    
  console.log(res.data);
  const result = res.data;

  if(result.result.insertedId){
    toast.success("order is success")
  }else{
    toast.error("order is Failed");
  }
console.log("data has benn inserted",   res.data)

});
}

  return (
    <Container>
      <Card className="border-0">
        {item.map((it) => (
          <Row className="row row-cols-sm-1 row-cols-md-2" key={it._id}>
            <Col md="5">
              <img
                src={it.image}
                alt="no image"
                className="w-100 img-thumbnail border-0 transparent"
              />
            </Col>
            <Col md="7">
              <h4>
                Parts : <span className="ms-2">{it.itemName}</span>{" "}
              </h4>
              <p>
                Pice :<span className="ms-2">{it.price}</span>
              </p>
              <p>
                inStock : <span className="ms-2">{it.quantity}</span>
              </p>
              <p>
                Minimum Qty : <span className="ms-2">{it.minimumOrderQty}</span>
              </p>
              <hr
                className="bg-success"
                style={{ maxWidth: "100vw", height: "2px" }}
              ></hr>
              <p>
                Description : <span className="ms-2"> {it.description}</span>{" "}
              </p>
              {/* <p className="d-flex my-3 align-items-center">
                <span> Qty</span>{" "}
                <input
                  className="form-control ms-4 form-control-sm"
                  name="productQty"
                  style={{ width: "100px" }}
                  type="number"
                  defaultValue="10"
                />
                <button className="btn btn-success ms-3">Order Now</button>
              </p> */}
            </Col>
          </Row>
        ))}
      </Card>
      <Card className="my-4 border-0 bg-light px-3 py-5 w-75 mx-auto">
        <Form onSubmit={handleSubmit(handleUserPurchaseOrderSubmit)}>
          <Row className="my-2">
            <Col md="3">
              <Form.Label>user name</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text"  disabled value={user?.displayName}
                {...register('username'
               /* , {
                  required:{
                    value:true,
                    message:"user name is required"
                  }
                } */

                )}
              />
            </Col>
          </Row>
          <Row className="my-2">
            <Col md="3">
              <Form.Label>Email</Form.Label>
            </Col>
            <Col>
              <Form.Control type="email" disabled  defaultValue={user?.email}
              {...register('email'
              // , {
              //     required:{
              //       value:true,
              //       message:"user email is required"
              //     }
              //   }
              )}
                />
                 {/* {errors?.email?.type === "required" && (
                    <span className="text-danger">
                      {errors?.email?.message}
                    </span>
                  )} */}
            </Col>
          </Row>
          <Row className="my-2">
            <Col md="3">
              <Form.Label>Order Quantity</Form.Label>
            </Col>
            <Col>
              <Form.Control type="number" 
              {...register('quantity', {
                  required:{
                    value:true,
                    message:"product quantity"
                  },
                  min:{value:item[0].minimumOrderQty, message: `minimum quantity ${item[0].minimumOrderQty}`},
                  max:{value: item[0].quantity, message:`maximum Quantity ${item[0].quantity} `}
                  
                })}
                defaultValue={item[0].minimumOrderQty}
                />
                 {errors?.quantity?.type === "min" && (
                    <span className="text-danger">
                      {errors?.quantity?.message}
                    </span>
                  )}
                  {errors?.quantity?.type === "max" && (
                    <span className="text-danger">
                      {errors?.quantity?.message}
                    </span>
                  )}
            </Col>
          </Row>
          <Row className="my-2">
            <Col md="3">
              <Form.Label>Phone Number</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text"  
              {...register('phoneNumber')}
              />
            </Col>
          </Row>
          <Row className="my-2">
            <Col md="3">
              <Form.Label>Address</Form.Label>
            </Col>
            <Col>
              <Form.Control  as="textarea" 
              {...register('address')}
              />
            </Col>
          </Row>

          <Row>
            <Col md="3"></Col>
            <Col>
              <Button className="bg-success" variant="primary" type="submit">
                Book Now
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Purchase;
