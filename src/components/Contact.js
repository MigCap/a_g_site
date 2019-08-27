import React from 'react';

import styled from 'styled-components/macro';
import { Main, theme, media } from '../styles';

import { IconInstagram } from './icons';

const { colors } = theme;

const MainContact = styled.main`
  max-height: calc(100vh - ${theme.navHeight});
  text-align: center;
  padding-top: 2rem;
  color: ${colors.lightGrey};

  ${media.phablet`
      padding: 2rem 0.5rem 0 0.5rem;
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
    padding: 3rem 1rem 0 1rem;
    font-size: 0.5rem;
  `};

  p {
    color: ${colors.lightGrey};
    padding: 0 5px;
    a {
      font-size: 0.5rem;
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
    <hr style={{ width: '70%' }} />
    {/* <p style={{ paddingTop: '10%', color: '#181818', fontWeight: 'bold' }}>
      Contact:
    </p> */}
    <p style={{ paddingTop: '10%' }}>contact@alejandroguijarro.com</p>
    <hr style={{ width: '80px' }} />
    <p style={{ color: '#181818', fontWeight: 'bold' }}>
      For sales and available works, please contact:
    </p>
    <p>Tristan Hoare: info@tristanhoare.com</p>
    <hr style={{ width: '80px' }} />
    <a
      href="https://www.instagram.com/alejandroguijarrostudio/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ paddingBottom: '10%' }}>
      <IconInstagram />
      <p>Instagram</p>
    </a>

    <hr style={{ width: '70%' }} />
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
