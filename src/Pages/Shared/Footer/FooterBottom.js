import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FooterBottom = () => {
  return (
    <div className="footer-bottom-outer">
      <Container>
       <Row>
          <Col sm="12">
            <div className="footer-bottom-section">
              <div className="bottom_copyright">
                <div className="footer-bottom-section1 footer_copy">
                  <small className="copyright text-light text-center">
                    <span className="d-block">
                      Copyright &copy;  { new Date().getFullYear()} All reserved.
                    </span>
                  </small>
                </div>
                <div className="footer-bottom-section2 footer_payment">
                  <div className="footer-payment tag-container">
                    <div className="footer-data-content">
                      <h5 className="text-end text-uppercase text-light">payment</h5>
                      <ul className="payment-inner d-flex justify-content-end">
                        <li>
                          <a title="Payment Banner Image 1" href="#">
                            {" "}
                            <img
                              src="https://demo.templatetrend.com/prestashop/PRS703_2/modules/ttpaymentbannerblock/views/img/payment1.png"
                              alt="Payment Banner Image 1"
                              width="auto"
                              height="auto"
                            />{" "}
                          </a>
                        </li>
                        <li>
                          <a title="Payment Banner Image 2" href="#">
                            {" "}
                            <img
                              src="https://demo.templatetrend.com/prestashop/PRS703_2/modules/ttpaymentbannerblock/views/img/payment2.png"
                              alt="Payment Banner Image 2"
                              width="auto"
                              height="auto"
                            />{" "}
                          </a>
                        </li>
                        <li>
                          <a title="Payment Banner Image 3" href="#">
                          
                            <img
                              src="https://demo.templatetrend.com/prestashop/PRS703_2/modules/ttpaymentbannerblock/views/img/payment3.png"
                              alt="Payment Banner Image 3"
                              width="auto"
                              height="auto"
                            />{" "}
                          </a>
                        </li>
                        <li>
                          <a title="Payment Banner Image 4" href="#">
                           
                            <img
                              src="https://demo.templatetrend.com/prestashop/PRS703_2/modules/ttpaymentbannerblock/views/img/payment4.png"
                              alt="Payment Banner Image 4"
                              width="auto"
                              height="auto"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Col>
        </Row>
        </Container>
    </div>
  );
};

export default FooterBottom;
