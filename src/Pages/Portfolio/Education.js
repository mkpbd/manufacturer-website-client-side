import React from "react";
import { Accordion } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar'

const Education = () => {
  return (
    <section className="section my-5" id="resume">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-10 col-lg-7 text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">
              Life Time
            </span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3">
              Education &amp; Experience
            </h2>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              I'm Frontend web developer in React js Bootstrap, HTML, CSS,
              Tailwind css, javaScript Node and MongoDB
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row g-0">
              <div className="col-lg-4 col-md-6">
                <div className="card rounded bg-light h-100 border-0">
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <div className="mx-auto text-center">
                      <img
                        src="images/port-folio/education.jpg"
                        alt=""
                        className="vector-dark"
                        height="150"
                      />
                      <img
                        src="images/personal/school-light.png"
                        alt=""
                        className="vector-light"
                        height="150"
                      />
                      <h5 className="text-dark fs-22 fw-medium my-2">
                        Education
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6">
                <div className="card rounded bg-white  h-100 border-0">
                  <div className="card-body p-0">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          {" "}
                          Master ‘S  OF ECONOMICS 
                          <span className="fw-medium text-primary ms-auto fs-14">
                            2014 - 2015
                          </span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="text-muted mb-3">
                            National university Institute : TONGI GOVT COLLEGE,
                            Result : 1st Class Pas.Year : 2015 , Duration : 1
                            year
                          </p>
                          <p className="fw-medium">Gazipur</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          BSS (Hons) OF ECONOMICS{" "}
                          <span className="fw-medium text-primary ms-auto fs-14">
                            2009 - 2013
                          </span>{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="text-muted mb-3">
                            National university Institute : TONGI GOVT COLLEGE,
                            Result : 1st Class Pas.Year : 2013 , Duration : 4
                            year
                          </p>
                          <p className="fw-medium">Gazipur</p>
                        </Accordion.Body>
                      </Accordion.Item>
                
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <hr className="hr-dashed" />
            <div className="row g-0">
              <div className="col-lg-4 col-md-6">
                <div className="card rounded bg-light h-100 border-0">
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <div className="mx-auto text-center">
                      <img
                        src="images/port-folio/experince.jpg"
                        alt=""
                        className="vector-dark"
                        height="150"
                      />
                      <img
                        src="images/personal/job-light.png"
                        alt=""
                        className="vector-light"
                        height="150"
                      />
                      <h5 className="text-dark fs-22 fw-medium my-2">
                        Experience
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6">
                <div className="card rounded bg-white  h-100 border-0">
                  <div className="card-body p-0">
                    <div>
                      <label htmlFor="html">
                        HTML 
                        <ProgressBar striped variant="success" now={60} />
                      </label>
                      <label>
                        CSS 
                        <ProgressBar striped variant="info" now={70} />
                      </label>
                     <label>
                       Bootstrap
                       <ProgressBar striped variant="warning" now={80} />
                     </label>
                     <label>
                       Tailwind Css
                       <ProgressBar striped variant="danger" now={80} />
                     </label>
                     
                     <label>
                       JavaScript
                       <ProgressBar striped variant="danger" now={60} />
                     </label>
                     <label>
                       React js
                       <ProgressBar striped variant="danger" now={60} />
                     </label>
                     <label>
                       Node js
                       <ProgressBar striped variant="danger" now={50} />
                     </label>
                     <label>
                       MongoDB
                       <ProgressBar striped variant="danger" now={50} />
                     </label>
                     <label>
                       Express js
                       <ProgressBar striped variant="danger" now={50} />
                     </label>

                    </div>
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

export default Education;
