import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.ul`
  list-style-type: none;
  display: flex;

  & > li {
    padding: 10px 20px;
    font-size: 1.5em;
  }
  & > li > a {
    color: white;
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/'>Services</Link>
      </li>
      <li>
        <Link to='/'>About Us</Link>
      </li>
      <li>
        <Link to='/'>Contact Us</Link>
      </li>
    </StyledNavbar>
  );
};

export default Navbar;
