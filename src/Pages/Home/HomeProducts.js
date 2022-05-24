import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HomeProducts = () => {
    return (
       <Container>
           <Row xm="1" md="2" className='my-5'>
                <Col className='border-0'>
                    <img className='img-thumbnail border-0' src="images/about-images.jpg" alt="" />
                </Col>
                <Col>
                    <h2 className='display-2 fw-bold'>Best Adventure Tourer Bikes</h2>
                    <p className='h6 my-5'>The allure of the open road is one of cycling’s enduring themes. Touring by bicycle allows for this on a grand scale, travelling for several days, often in far-flung places with all your kit strapped to the bike. Of course, micro-adventures closer to home can be just as much fun and still keep the spirit of adventure alive.</p>

                    <div>
                        <img className='img-thumbnail border-0' src="images/about-1.jpg" alt="" />
                        <img className='img-thumbnail border-0' src="images/about-2.jpg" alt="" />
                        <img className='img-thumbnail border-0'  src="images/about-3.jpg" alt="" />
                    </div>
                </Col>
           </Row>
       </Container>
    );
};

export default HomeProducts;