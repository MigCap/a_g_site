import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components/macro';
import { theme, media } from '../styles';
const { colors } = theme;

const Nav = ({ worksModalIsOpen }) => {
  const zIndex = worksModalIsOpen ? '-10' : '10';

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
    background-color: white;
    text-align: center;
    z-index: ${zIndex};

    ${media.tablet`
      top: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      min-height: ${theme.navHeight};
      height: ${theme.navHeight};
      flex-direction: row;
    `};

    ${media.phablet`
      font-size: 0.9rem;
      height: calc(20px + 2.2rem);
    `};

    & > * {
      width: 100%;
      ${media.tablet`
      width: 100%;
    `};
    }
  `;

  const NavTitle = styled(NavLink)`
    color: ${colors.grey};
    letter-spacing: 0.4rem;
    padding-top: 0.5rem;
    text-align: center;
    font-family: Arial Black;
    font-size: 0.9rem;
    font-weight: 900;
    &:hover {
      ${theme.transition};
      color: ${colors.lightGrey};
    }
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
        padding: 0 10px;
        ${media.tablet`
          padding: 0 10px;
        `};
        a {
          color: ${colors.lightGrey};
          font-size: 0.7rem;
          font-weight: normal;
          ${media.tablet`
            font-size: 0.6rem;
          `};

          &:hover {
            ${theme.transition};
            color: ${colors.black};
          }
        }
        .active {
          font-weight: 900;
          color: ${colors.black};
        }
      }
    }
  `;

  return (
    <NavContainer>
      <NavTitle exact to="/" activeClassName="active">
        ALEJANDRO GUIJARRO
      </NavTitle>
      <NavBar>
        <ul>
          <li>
            <NavLink to="/works" activeClassName="active">
              Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/bio" activeClassName="active">
              Bio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </NavBar>
    </NavContainer>
  );
};

export default Nav;
