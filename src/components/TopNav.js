import React, { Component, useEffect, useState } from 'react';
import { Button, Navbar, Container, Nav, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

 function TopNav(){
   return(
    <>
       <Navbar  expand="lg" className="top-nav-bar" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Emp Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/">Home</Link>
                <Link to="/add-emp">Add Employee</Link>
                <Link to="/edit-emp">Edit Employee</Link>
                <Link to="/product">Product</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}
export default TopNav