import React from 'react'
import { Nav, NavDec, NavLink, NavIcon, Bars } from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <div>
        <Nav>
          <NavLink to='/'>Tab Manager Plus</NavLink>
          <NavIcon onClick={toggle}>
            <p>Menu</p>
            <Bars />
          </NavIcon>
        </Nav>
        <NavDec />
    </div>
  )
}

export default Navbar
