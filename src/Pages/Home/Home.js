import React from 'react';
import Parts from '../../components/Parts/Parts';
import Banner from './Banner';
import HomeProducts from './HomeProducts';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Parts></Parts>

            <Summary></Summary>
        </div>
    );
};

export default Home;