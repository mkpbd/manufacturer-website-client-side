
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleItem = (props) => {
  const item = props.item;
  
    return (
        <Card className='my-3'>
        <Card.Img className='img-thumbnail border-0 p-0' style={{height:'200px'}} variant="top" src={item?.image}/>
        <Card.Body>
          <Card.Title>{item?.itemName}</Card.Title>
          <Card.Text>
           {item?.description.slice(0,100)}...
          </Card.Text>
          <p className='text-primary'>Price: {item?.price}</p>
            <p className='text-secondary py-3 d-flex justify-content-between'><span>minimum : {item?.minimumOrderQty}</span> <span className='align-self-end'> quantity: 200</span></p>
          <p className='form-control form-control-sm'>Quantity: {item?.quantity}</p>
          <Button className='my-3 btn-secondary'>
            <Link className='nav-link text-light' to={`/purchase/${item?._id}`}>Show Details</Link>
          </Button>
        </Card.Body>
      </Card>
    );
};

export default SingleItem;