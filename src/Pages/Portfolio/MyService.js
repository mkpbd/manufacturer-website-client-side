import React from 'react';

const MyService = () => {
    return (
        <section className="section bg-gradient-light-white my-5" id="services">
            <div className="container">                
                <div className="row justify-content-center mb-4">
                    <div className="col-12 col-md-10 col-lg-7 text-center position-relative">
                        <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Services</span>
                        <h2 className="fs-2 fw-medium lh-1 text-dark my-3 position-relative z-i-2">Our Services</h2>
                        <div className="bg-text">
                            <h1 className="fw-bold p-0">Projects</h1>
                        </div>
                        <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
                        With over 1+ years of expertise in React.js, we have tremendous expertise in working on React js, Redux, react hooks. You will get an amazing service where all the smaller details of the design will be taken care of..
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card rounded shadow border-0">
                            <div className="card-body p-4 m-2">
                                <div className="bg-soft-alt-orange d-flex justify-content-center align-items-center thumb-xl  rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers align-self-center svg-orange icon-md"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>  
                                </div>
                                <h5 className="text-dark fs-22 fw-medium my-4">Care ware house </h5>
                                <img className='img-thumbnail border-0 my-3' src="images/care-warehouse.png" alt="" />
                                <a href='https://car-warehouse-client.web.app/' target="_blink">Live site link</a>
                             
                                <p className="text-muted pb-4">
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card rounded shadow  border-0">
                            <div className="card-body p-4 m-2">
                                <div className="bg-soft-alt-info d-flex justify-content-center align-items-center thumb-xl  rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign align-self-center svg-info icon-md"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>  
                                </div>
                                <h5 className="text-dark fs-22 fw-medium my-4">Accountant Consultancy</h5>
                                 <img className='img-thumbnail border-0 my-3' src="images/accountnacy.png" alt="" />
                                 <a href="https://accountant-consultancy.firebaseapp.com/" target="_blink">Live site</a>
                                <p className="text-muted pb-4">Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card rounded shadow  border-0">
                            <div className="card-body p-4 m-2">
                                <div className="bg-soft-alt-success d-flex justify-content-center align-items-center thumb-xl  rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square align-self-center svg-success icon-md"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>  
                                </div>
                                <h5 className="text-dark fs-22 fw-medium my-4">Food App</h5>
                                    <img className='img-thumbnail border-0 my-3' src="images/site-3.png" alt=""></img>
                                <a  href='https://mostofa-lucky-one.netlify.app/' target='_blink'>
                                    Live web site link
                                </a>
                                <p className="text-muted pb-4">Separated they live in Bookmarksgrove right at the coast of the Semantics, and large.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyService;