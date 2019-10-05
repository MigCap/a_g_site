import React from 'react';

import styled from 'styled-components/macro';
import { theme, media } from '../styles';

const { colors } = theme;

const MainHome = styled.main`
  max-height: calc(100vh - ${theme.navHeight});
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 80%;
  padding-top: auto;
  ${media.tiny`
  padding-top: 50px;
  `};
`;

const LandingImage = styled.img`
  object-fit: contain;
  max-width: 80vw;
  max-height: 70vh;
`;

const Rights = styled.div`
  text-align: center;
  padding-top: 3rem;
  font-size: 0.6rem;

  ${media.phablet`
    padding: 3rem 2rem 0 2rem;
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

const Home = () => (
  <MainHome>
    <ImageWrapper>
      <LandingImage
        src="/static/images/Lead/P01692a00xf2006_(Adam_and_Eve).jpg"
        alt="Alejandro Gujarro - Adam and Eve"
      />
    </ImageWrapper>
    <Rights>
      <p>
        &copy; {new Date().getFullYear()} Alejandro Guijarro All Rights
        Reserved.
      </p>
      <p>
        Designed & built by{' '}
        <a
          href="https://www.miguelcapellan.com"
          target="_blank"
          rel="noopener noreferrer">
          MCV
        </a>
      </p>
    </Rights>
  </MainHome>
);

export default Home;
