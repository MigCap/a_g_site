import React from 'react';
import { Link } from '@reach/router';

import styled from 'styled-components/macro';
import { theme, mixins, media } from '../styles';
const { colors } = theme;

const NavContainer = styled.nav`
  display: grid;
  align-items: center;
  min-width: 100vw;
  width: 100vw;
  min-height: ${theme.navHeight};
  height: ${theme.navHeight};
  position: fixed;
  top: 0;
  left: 0;
  color: ${colors.grey};
  background-color: ${colors.white};
  text-align: center;
  z-index: 99;
  ${media.tablet`
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    min-height: ${theme.navHeight};
    height: ${theme.navHeight};
    flex-direction: row;
  `};
  & > * {
    width: 100%;
    ${media.tablet`
      width: 100%;
    `};
  }
`;

const NavTitle = styled(Link)`
  color: ${colors.grey};
  letter-spacing: 0.4rem;
  padding-top: 0.5rem;
  text-align: center;
  ${media.tablet`
    font-size: 0.9rem;
  `};
`;

const NavBar = styled.nav`
  padding: 0.5rem 0;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    li {
      padding: 0 5px;
      ${media.tablet`
      padding: 0 10px;
      `};
      a  {
        font-size: 0.7rem;
        font-weight: 100;
        letter-spacing: 0.1rem;
        ${media.tablet`
          font-size: 0.6rem;
        `};
      }
    }
  }
`;

const Nav = () => (
  <NavContainer>
    <NavTitle to="/">ALEJANDRO GUIJARRO</NavTitle>
    <NavBar>
      <ul>
        <li>
          <Link to="/works">Work</Link>
        </li>
        <li>
          <Link to="/bio">Bio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </NavBar>
  </NavContainer>
);

export default Nav;
