import React from 'react';
import { FaReact,FaBootstrap,FaCss3Alt,FaHtml5 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const AboutMe = () => {
    return (
        <section className="section my-5" id="about">
        <div className="container">
            <div className="row align-items-center">                
                <div className="col-lg-6 align-self-center">
                    <h5 className="fs-24 text-dark fw-medium"><mark>Personal Details</mark></h5>       
                    <h4 className="fw-normal lh-base text-gray-700 mb-4 fs-20">
                    To work in a meaningful and challenging position that enables me to develop myself as a professional and permits scope for advancement. Disney Company
                    </h4>
                  
                </div>
                <div className="col-lg-5 ms-auto align-self-center">
                    <div className="mb-5 mb-lg-0">
                        <p className="mb-2">
                            <span className="personal-detail-title">Date of birth</span> 
                            <span className="personal-detail-info ms-2">20 January 1990</span>
                        </p>
                        <p className="mb-2">
                            <span className="personal-detail-title">Spoken Langages</span> 
                            <span className="personal-detail-info ms-2">English - Bangoli </span>
                        </p>
                        <p className="mb-2">
                            <span className="personal-detail-title">Nationality</span> 
                            <span className="personal-detail-info ms-2">Bangladeshi</span>
                        </p>
                        <p className="mb-2">
                            <span className="personal-detail-title">Interest</span> 
                            <span className="personal-detail-info">Music, Reading, Watching</span>
                        </p>
                    </div>
                </div>
                <div className="col-12 mt-5">
                    <div className="d-flex flex-wrap justify-content-center  mt-4 mt-md-5">
                        <div className="mx-3 ms-sm-0 ms-sm-0 mb-3 card-bg rounded p-1 pe-3 p-md-3 pe-md-4 shadow-sm">
                            <div className="d-flex align-items-center">
                                <div className="thumb-md d-flex flex-wrap justify-content-center align-items-center">
                                  <SiMongodb></SiMongodb>
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-0 fw-medium text-gray-700">MongoDB</h6>
                                    <p className="text-muted mb-0 fs-12">1 Year Experience</p>
                                </div>
                            </div>                           
                        </div>
                        <div className="mx-3 ms-sm-0 ms-sm-0 mb-3 card-bg rounded p-1 pe-3 p-md-3 pe-md-4 shadow-sm">
                            <div className="d-flex align-items-center">
                                <div className="thumb-md d-flex flex-wrap justify-content-center align-items-center">
                                  <FaCss3Alt></FaCss3Alt>
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-0 fw-medium text-gray-700">Css</h6>
                                    <p className="text-muted mb-0 fs-12">1 Year Experience</p>
                                </div>
                            </div>                           
                        </div>
                        <div className="mx-3 ms-sm-0 ms-sm-0 mb-3 card-bg rounded p-1 pe-3 p-md-3 pe-md-4 shadow-sm">
                            <div className="d-flex align-items-center">
                                <div className="thumb-md d-flex flex-wrap justify-content-center align-items-center">
                                   <FaBootstrap></FaBootstrap>
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-0 fw-medium text-gray-700">Bootstrap</h6>
                                    <p className="text-muted mb-0 fs-12">1 Year Experience</p>
                                </div>
                            </div>                           
                        </div>
                    
                        <div className="mx-3 ms-sm-0 ms-sm-0 mb-3 card-bg rounded p-1 pe-3 p-md-3 pe-md-4 shadow-sm">
                            <div className="d-flex align-items-center">
                                <div className="thumb-md d-flex flex-wrap justify-content-center align-items-center">
                                   <FaReact></FaReact>
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-0 fw-medium text-gray-700">React</h6>
                                    <p className="text-muted mb-0 fs-12">8 Months Experience</p>
                                </div>
                            </div>                           
                        </div>
                        <div className="mx-3 ms-sm-0 ms-sm-0 mb-3 card-bg rounded p-1 pe-3 p-md-3 pe-md-4 shadow-sm">
                            <div className="d-flex align-items-center">
                                <div className="thumb-md d-flex flex-wrap justify-content-center align-items-center">
                                  <FaHtml5></FaHtml5>
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-0 fw-medium text-gray-700">HTML</h6>
                                    <p className="text-muted mb-0 fs-12">3 Months Experience</p>
                                </div>
                            </div>                           
                        </div>
        
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AboutMe;