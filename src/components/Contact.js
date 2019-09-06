import React from 'react';

import styled from 'styled-components/macro';
import { theme, media } from '../styles';

import { IconInstagram } from './icons';

const { colors } = theme;

const MainContact = styled.main`
  max-height: calc(100vh - ${theme.navHeight});
  text-align: center;
  padding-top: 2rem;
  color: ${colors.lightGrey};

  ${media.phablet`
      padding: 1rem 0.5rem 0 0.5rem;
  `};

  p {
    padding: 0.5rem 0;
  }

  a {
    font-size: 0.2rem;
    color: ${colors.grey};
    padding: 0.5rem 0;
    &:hover {
      ${theme.transition};
      color: ${colors.black};
    }

    svg {
      width: 0.7rem;
    }
    p {
      font-size: 0.7rem;
      ${media.phablet`
        font-size: 0.5rem;
      `};
    }
  }
`;

const PrarragraphStyled = styled.p`
  padding-top: 10% !important;

  ${media.phablet`
    padding-top: 1%;
  `};
`;

const LinkStyled = styled.a`
  padding-bottom: 2%;

  ${media.phablet`
    padding-bottom: 2%;
  `};
  &:hover {
    ${theme.transition};
    p {
      color: ${colors.black};
    }
    svg {
      color: ${colors.black};
    }
  }

  svg {
    color: ${colors.lightGrey};
  }

  p {
    color: ${colors.lightGrey};
  }
`;

const Rights = styled.div`
  grid-area: rights;
  grid-column: 1 / span 3;
  grid-row: 2;
  padding-top: 6rem;

  ${media.desktop`
    justify-self: end;
  `};
  ${media.tablet`
    justify-self: center;
  `};
  ${media.phablet`
    padding: 1rem 1rem 0 1rem;
    font-size: 0.5rem;
  `};

  p {
    color: ${colors.lightGrey};
    padding: 0 5px;
    a {
      font-size: 0.7rem;
      color: ${colors.lightGrey};
      &:hover {
        ${theme.transition};
        color: ${colors.black};
      }
    }
  }
`;

const Contact = () => (
  <MainContact>
    {/* <hr style={{ width: '70%' }} /> */}
    <PrarragraphStyled>contact@alejandroguijarro.com</PrarragraphStyled>

    {/* <hr style={{ width: '100px' }} /> */}
    <p style={{ color: '#181818', fontWeight: 'bold' }}>
      For sales and available works, please contact:
    </p>
    <p>Tristan Hoare: info@tristanhoare.com</p>

    {/* <hr style={{ width: '100px' }} /> */}
    <LinkStyled
      href="https://www.instagram.com/alejandroguijarrostudio/"
      target="_blank"
      rel="noopener noreferrer">
      <IconInstagram />
      <p>Instagram</p>
    </LinkStyled>

    {/* <hr style={{ width: '70%' }} /> */}
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
  </MainContact>
);

export default Contact;
