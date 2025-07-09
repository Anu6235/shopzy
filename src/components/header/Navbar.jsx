import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFilm, FaLaugh, FaFire } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  productcontext } from '../../Routing'; // Adjust the import path as necessary

const Navbarcomp = () => {
  const { setsearchdata ,searchdata } = useContext(productcontext);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9M_S0BiMfgtuyaq_lVn7IUUF7GD2eQCL7afVyAnSZhrQ_RcTJuEGctiUCxw7s7QRncik&usqp=CAU"
            style={{ height: '64px', width: '171px' }}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
       
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(e) => setsearchdata(e.target.value)} 
              
            />
          </Col>
         
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navbarcomp;
