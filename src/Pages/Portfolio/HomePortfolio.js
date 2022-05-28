import React from 'react';
import { Container } from 'react-bootstrap';
import AboutMe from './AboutMe';
import Education from './Education';
import MyService from './MyService';
import PortfolioHeader from './PortfolioHeader';

const HomePortfolio = () => {
    return (
       <Container>
           <PortfolioHeader></PortfolioHeader>
           <AboutMe></AboutMe>
           <MyService></MyService>
           <Education></Education>
       </Container>
    );
};

export default HomePortfolio;