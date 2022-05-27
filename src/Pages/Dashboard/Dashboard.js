import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../custom_hooks/useAdmin";
import auth from "../../firebase.init";
import "./Dashboard.css";
const Dashboard = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

  return (
    <Container fluid>
      <Row>
        <Col sm="3" className="sidebarMenuWitdh">
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

            <Link className="nav-link" to="/dashboard/add">
              Add parts
            </Link>
            {admin && <Link className="nav-link" to="/dashboard/user">
             User
            </Link>}

           
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
