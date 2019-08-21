import React from 'react';
import { NavLink } from 'react-router-dom';

import { IconInstagram } from './icons';

import styled from 'styled-components/macro';
import { theme, media } from '../styles';
const { colors } = theme;

const FooterContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 100%;
  align-items: center;
  min-width: 100%;
  width: 100%;
  min-height: 50px;
  height: 100px;
  color: ${colors.grey};
  background-color: white;
  font-size: 0.6rem;
  text-align: center;
  z-index: 100;
  border-top: solid 0.5px ${colors.lightestGrey};
  margin-top: 50px;

  ${media.desktop`
    padding: 1rem 0 5rem 0;
  `};
  ${media.tablet`
    padding: 1rem 0 4rem 0;
  `};
  ${media.phablet`
    padding: 1rem 0 4rem 0;
  `};
  /* & > * {
    width: 100%;
    ${media.tablet`
      width: 100%;
    `};
  } */
`;

const FooterSocialIcons = styled.div`
  justify-self: start;
  a {
    padding: 0 5px;
    width: 1.2rem;
    color: ${colors.lightGrey};
    &:hover {
      ${theme.transition};
      color: ${colors.black};
    }
  }
`;

const FooterBackToTop = styled.div`
  a {
    color: ${colors.lightGrey};
    &:hover {
      ${theme.transition};
      color: ${colors.black};
    }
    /* div {
      display: inline-block;
      padding: 0 5px;
      width: 1.2rem;
    } */
  }
`;

const FooterNav = styled.nav`
  margin: 0;
  padding: 0;
  justify-self: end;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    li {
      color: ${colors.lightGrey};
      padding: 0 5px;
      font-weight: 200;
      border-right: solid 1px ${colors.lightestGrey};
      &:last-child {
        border-right: none;
      }
      .active {
        font-weight: 900;
        color: ${colors.black};
      }
      a {
        &:hover {
          ${theme.transition};
          color: ${colors.black};
        }
      }
    }
  }
`;

const Rights = styled.div`
  grid-column: 1 / span 3;
  grid-row: 2;
  padding-top: 5rem;

  ${media.desktop`
    justify-self: end;
  `};
  ${media.tablet`
    justify-self: center;
  `};
  ${media.phablet`
  `};

  p {
    color: ${colors.lightGrey};
    a {
      &:hover {
        ${theme.transition};
        color: ${colors.black};
      }
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterSocialIcons>
      <a
        href="https://www.instagram.com/alejandroguijarrostudio/"
        target="_blank"
        rel="noopener noreferrer">
        <IconInstagram />
      </a>
    </FooterSocialIcons>
    <FooterBackToTop>
      <a href="#root">Back to Top &uarr;</a>
    </FooterBackToTop>
    <FooterNav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
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
    </FooterNav>
    <Rights>
      <p>
        &copy; {new Date().getFullYear()} Alejandro Guijarro All Rights
        Reserved. Designed & built by{' '}
        <a
          href="https://www.miguelcapellan.com"
          target="_blank"
          rel="noopener noreferrer">
          MCV
        </a>
      </p>
    </Rights>
  </FooterContainer>
);

export default Footer;
