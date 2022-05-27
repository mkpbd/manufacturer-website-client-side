import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navigation = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
      signOut(auth);
      localStorage.removeItem('accessToken');
    
  };
    return (
        <Navbar collapseOnSelect variant='dark' expand="lg" style={{ "color":"#fff", "borderBottom":"5px solid #fff", "background": "#1BA370"}}>
        <Container>
        <Link to='/'>
        <Navbar.Brand>
          <img src="images/logo.png" alt="" />
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/blog' className='nav-link'>Blog</Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
           
          </Nav>
          <Nav>
            <Link to='/dashboard' className='nav-link'>Dashboard</Link>
            
           {user ?  <button type='submit' onClick={logout} className='nav-link'>Log Out</button>: <Link to='/login' className='nav-link'>Login</Link>}
            <Link to='/register' className='nav-link'>Register</Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;