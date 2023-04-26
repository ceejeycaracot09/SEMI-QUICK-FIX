import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

const Navbar = () => {
  return (
   <>
    <Nav>
        <NavLink to='/'>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
          <h1>iRecommend</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/marketplace' activeStyle>
            Marketplace
          </NavLink>
          <NavLink to='/booking' activeStyle>
            Booking
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
   </>
  );
};

export default Navbar;