import React, { Component } from 'react';
import { Router } from '@reach/router';

import styled from 'styled-components/macro';
import { GlobalStyle } from '../styles';
import { theme, media } from '../styles';

import Nav from './Nav';
import Home from './Home';

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const SiteWrapper = styled.div`
  padding-top: calc(${theme.navHeight} + 1.5rem);
  ${media.tablet`
    padding-top: calc(${theme.navHeight} + 1.5rem);
  `};
`;

const App = () => (
  <AppContainer>
    <GlobalStyle />

    <SiteWrapper>
      <Nav />
      <Router>
        <Home path="/" />
      </Router>
    </SiteWrapper>
  </AppContainer>
);

export default App;
