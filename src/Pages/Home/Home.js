import React from 'react';
import Parts from '../../components/Parts/Parts';
import Banner from './Banner';
import HomeProducts from './HomeProducts';
import Review from './Review';
import SpicealAdd from './SpicealAdd';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Parts></Parts>
            <SpicealAdd></SpicealAdd>
            <Summary></Summary>
            <Review></Review>
        </div>
    );
};

export default Home;