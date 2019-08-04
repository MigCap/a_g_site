import React from 'react';
//import { Router } from '@reach/router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import ScrollToTop from '../utils/ScrollToTop';

import Nav from './Nav';
import Home from './Home';
import Works from './Works';
import Bio from './Bio';
import Contact from './Contact';
import NoMatch from './NoMatch';

import styled from 'styled-components/macro';
import { GlobalStyle } from '../styles';
import { theme, media } from '../styles';

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

const history = createBrowserHistory();

const App = () => (
  <AppContainer>
    <GlobalStyle />

    <SiteWrapper>
      <Router>
        <Nav />

        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/works" component={Works} />
            <Route component={Bio} exact path="/bio" />
            <Route component={Contact} exact path="/contact" />
            <Route component={NoMatch} />
          </Switch>
        </ScrollToTop>
      </Router>
    </SiteWrapper>
  </AppContainer>
);

export default App;
