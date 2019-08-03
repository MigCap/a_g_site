import React from 'react';

import styled from 'styled-components/macro';
import { theme, mixins, media, Main } from '../styles';
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
`;

const LandingImage = styled.img`
  object-fit: contain;
  max-width: 80vw;
  max-height: 70vh;
`;

const Home = () => (
  <MainHome>
    <ImageWrapper>
      <LandingImage
        src="/static/images/Lead/P01692a00xf2006 (Adam and Eve).jpg"
        alt="Adam and Eve"
      />
    </ImageWrapper>
  </MainHome>
);

export default Home;
