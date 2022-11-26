import React from 'react'
import Footer from "./footer/Footer";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import { Nav, Navbar, Container } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'


export default function Home() {
  return (
    <>
      <Navbar  variant="light"  style= {{backgroundColor:'transparent' , fontWeight:'bold'}}>
        <Container>
          <Navbar.Brand href="#home">Helping Hand</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='p-3' href="#home">about</Nav.Link>
            <Nav.Link  className='p-3' href="#features">blog</Nav.Link>
            <Nav.Link  className='p-3' href="#pricing">contribute</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link  className='p-3' href="/login">Log in</Nav.Link>
            <Nav.Link  className='p-3'  href="/signup">
              Sign Up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Section2 />

<Section1/>

<Footer/>
    </>
  )
}