import React from 'react';

const PortfolioHeader = () => {
    return (
        <section className="hero-one position-relative main-bg" id="home" style={{"backgroundImage": "url(images/port-folio/main-bg.png)", "backgroundSize": "cover", "backgroundPosition": "center center"}}>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                
                <div className="col-lg-5  mx-auto mt-5"> 
                    <img src="images/port-folio/mostofakamal.jpg" alt="" className="img-fluid ml-lg-5"/>
                </div> 
                <div className="col-lg-7 text-center px-0 px-xl-4 mt-5 mt-lg-0 pt-5 pt-lg-0">
                    <h5 className="d-inline-block py-1 px-3 rounded text-muted font-secondary">Hi, I'm Mostofa kamal</h5>
                    <h1 className="hero-title mb-4 font-secondary fo">I'm a  Frontend  <mark><span className="fw-medium typewrite" data-period="2000" data-type="[&quot;React&quot;, &quot;Flutter&quot;, &quot;Python&quot;]"><span className="wrap">React js  </span></span></mark> Developer</h1>   
                    <span className="wrap"></span>                     
                    <div className="mb-5 mb-lg-0">                           
                        <div className="d-inline-block">
                            <a href="#" className="btn btn-success">Download CV</a>
                        </div>
                    </div>
                </div>               
            </div>       
        </div>
    </section>
    );
};

export default PortfolioHeader;