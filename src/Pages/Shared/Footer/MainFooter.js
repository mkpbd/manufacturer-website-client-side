import React from 'react';
import FooterBottom from './FooterBottom';
import FooterMiddle from './FooterMiddle';
import FooterTop from './FooterTop';

import './FooterMain.css'

const MainFooter = () => {
    return (
    <footer className="page-footer" style={{background:"#3b3b3b"}}>
   
    <div className="footer">
        <FooterTop></FooterTop>
        <FooterMiddle></FooterMiddle>

        <FooterBottom></FooterBottom>
          
    
           
            
        </div>

    
    
    </footer>
    );
};

export default MainFooter;