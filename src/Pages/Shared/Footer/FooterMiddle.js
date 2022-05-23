import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterMiddle = () => {
  return (
    <div className="footer-middle-outer py-5">
      <Container>
        <Row>
          <Col sm="12">
            <Row>
              <div className="footer-middle-section1 footer-middle-section col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div className="footer-common collapsible">
                  <div className="footer-static">
                    <h5 className="text-center text-light mb-3">SuperBike</h5>
                    <ul className=" footer-content address-footer">
                      <li className="item">
                        <img
                          className="img-leftbanner"
                          src="https://demo.templatetrend.com/magento/MAG777/pub/static/version1630650548/frontend/Ortho/superbikebicycle/en_US/images/footer-logo.png"
                          alt="main-banner1"
                        />
                      </li>
                      <li className="item mt-2">
                        <div className="text-light">
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those interested. The standard
                          chunk of Lorem Ipsum
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </div>
              <div className="footer-middle-section2 footer-middle-section col-xs-12 col-sm-12 col-md-2 col-lg-2">
                <div className="footer-common collapsible mobile-collapsible">
                  <div className="footer-static">
                    <h5 className="text-center text-light mb-3">Shop by</h5>
                    <ul className="clearfix footer-content">
                      <li className="item">
                        <a href="#">Your Orders</a>
                      </li>
                      <li className="item">
                        <a href="#">Your Wishlist</a>
                      </li>
                      <li className="item">
                        <a href="#">Payment</a>
                      </li>
                      <li className="item">
                        <a href="#">Delivery</a>
                      </li>
                      <li className="item">
                        <a href="#">Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </div>
              <div className="footer-middle-section3 footer-middle-section col-xs-12 col-sm-12 col-md-2 col-lg-2">
                <div className="footer-common collapsible mobile-collapsible">
                  <div className="footer-static">
                    <h5 className="text-center text-light mb-3">Products</h5>
                    <ul className="clearfix footer-content">
                      <li className="item">
                        <a href="#">Prices drop</a>
                      </li>
                      <li className="item">
                        <a href="#">New products</a>
                      </li>
                      <li className="item">
                        <a href="#">Best sales</a>
                      </li>
                      <li className="item">
                        <a href="#">Stores</a>
                      </li>
                      <li className="item">
                        <a href="#">Login</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </div>
              <div className="footer-middle-section4 footer-middle-section col-xs-12 col-sm-12 col-md-2 col-lg-2">
                <div className="footer-common collapsible mobile-collapsible">
                  <div className="footer-static">
                    <h5 className="text-center text-light mb-3">Our Company</h5>
                    <ul className="footer-content">
                      <li className="item">
                        <a href="#">Delivery</a>
                      </li>
                      <li className="item">
                        <a href="#">About us</a>
                      </li>
                      <li className="item">
                        <a href="#">Contact us</a>
                      </li>
                      <li className="item">
                        <a href="#">Sitemap</a>
                      </li>
                      <li className="item">
                        <a href="#">Stores</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-middle-section4 footer-middle-section col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div className="footer-common collapsible mobile-collapsible">
                  <div className="footer-static">
                    <h5 className="text-center text-light mb-3">Contact</h5>
                    <ul className="clearfix footer-content">
                      <li className="addresh-wrapper">
                        <a href="#">
                         
                          44 Shirley Ave, West Chicago, IL 60185 Angelo
                        </a>
                      </li>
                      <li className="mobile-wrapper">
                        <a href="#"> 0123 456 789 </a>
                      </li>
                      <li className="email-wrapper">
                        <a href="#"> Dixit0611@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterMiddle;
