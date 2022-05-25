import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <Container fluid>
      <Row>
        <Col sm="4" className="sidebarMenuWitdh">
          <span
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={openNav}
          >
            &#9776; open
          </span>
          <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={closeNav}>
              &times;
            </a>
            <Link className="nav-link" to="/dashboard">
              My Appointments
            </Link>
            <Link className="nav-link" to="/dashboard/pro">
              My History
            </Link>

            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </Col>

        <Col sm="8">
            hellow
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
