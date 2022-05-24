
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleItem = () => {
    return (
        <Card>
        <Card.Img className='img-thumbnail border-0 p-0' variant="top" src="images/about-1.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <p className='text-primary'>Price: $100</p>
            <p className='text-secondary py-3 d-flex justify-content-between'><span>minimum : 10</span> <span className='align-self-end'> quantity: 200</span></p>
          <label htmlFor='qty'  className='form-control form-control-sm'>Quantity:  <input type="text"  /></label>
          <Button className='my-3 '>Book Now</Button>
        </Card.Body>
      </Card>
    );
};

export default SingleItem;