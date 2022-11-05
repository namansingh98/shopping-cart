import React, { useState } from 'react'
import '../css/Header.css'
import {Button, Container,Navbar, Modal, NavbarBrand} from 'react-bootstrap'

function Header() {
  const [show,setShow]= useState(false);
  const handleClose =()=>setShow(false);
  const handleShow=()=>setShow(true);
  return (
    <>
    <Navbar expand='sm'>
        <Navbar.Brand href='/' >E-commerce</Navbar.Brand> 
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
          <Button onClick={handleShow}> 0 in Cart</Button>
        </Navbar.Collapse>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
  <Modal.Body>
    <h1>this is the model body</h1>
  </Modal.Body>
    </Modal>
    </>
  )

}

export default Header