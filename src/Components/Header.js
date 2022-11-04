import React from 'react'
import '../css/Header.css'
import {Button, Container,Navbar, Modal, NavbarBrand} from 'react-bootstrap'

function Header() {
  return (
    <Navbar expand='sm'>
        <Navbar.Brand href='/' >E-commerce</Navbar.Brand> 
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
          <Button> 0 in Cart</Button>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header