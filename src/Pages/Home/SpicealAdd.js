import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import banner1 from '/images/banner1.jpg';
// import banner2 from '/images/banner2.jpg';

const SpicealAdd = () => {
    return (
       <Container>
           <h3 className='fw-bold my-4 text-success text-center display-5'>Women spacial bicycle </h3>
           <Row className="row-cols-sm-1, row-cols-md-2">
            <Col>
                <img className='img-thumbnail border-0' src="images/banner2.jpg" alt="" />
            </Col>
            <Col>
                <img className='img-thumbnail border-0' src="images/banner1.jpg" alt="" />
            </Col>
           </Row>
       </Container>
    );
};

export default SpicealAdd;