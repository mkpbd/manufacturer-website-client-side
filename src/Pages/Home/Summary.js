import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {FaFlag, FaDesktop,FaUsers, FaThumbsUp} from 'react-icons/fa';
import { RiProfileLine } from "react-icons/ri";
const Summary = () => {
    return (
       <Container>
           <Row className='my-5'>
               <h2 className='display-5 text-uppercase text-center'>Millions Business Trust us</h2>
               <h3 className='text-uppercase h6 text-center mt-3'>Try To understand user Exception</h3>
           </Row>
           <Row className='row row-col-md-4 row-cols-ms-2 text-center mt-4 mb-5'>
               <Col>
                 <FaFlag className='h2 text-primary'></FaFlag>
                 <h2 className='my-3'>72</h2>
                 <p>Countries</p>
               </Col>
              
               <Col>
                 <RiProfileLine className='h2 text-primary'></RiProfileLine>
                 <h2 className='my-3'>300+</h2>
                 <p>Complete projects</p>
               </Col>
              
               <Col>
                 <FaUsers className='h2 text-primary'></FaUsers>
                 <h2 className='my-3'>150</h2>
                 <p>Happy Clients</p>
               </Col>
              
               <Col>
                 <FaThumbsUp className='h2 text-primary'></FaThumbsUp>
                 <h2 className='my-3'>250</h2>
                 <p>Feedback</p>
               </Col>
              
           </Row>
       </Container>
    );
};

export default Summary;