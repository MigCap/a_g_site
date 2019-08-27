import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from '../utils/ScrollToTop';

import Nav from './Nav';
import Home from './Home';
import Works from './Works';
import Bio from './Bio';
import Contact from './Contact';
import NoMatch from './NoMatch';

import styled from 'styled-components/macro';
import { GlobalStyle, theme, media } from '../styles';

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const SiteWrapper = styled.div`
  padding-top: calc(${theme.navHeight} + 1.5rem);
  ${media.tablet`
    padding-top: calc(${theme.navHeight} + 0.5rem);
  `};
  ${media.phone`
  padding-top: 100px;
  `};
`;

const App = () => {
  const [worksModalIsOpen, setWorksModalIsOpen] = useState(false);

  return (
    <AppContainer>
      <GlobalStyle />

      <SiteWrapper>
        <Router>
          <Nav worksModalIsOpen={worksModalIsOpen} />

          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/works"
                render={props => (
                  <Works
                    {...props}
                    worksModalIsOpen={worksModalIsOpen}
                    setWorksModalIsOpen={setWorksModalIsOpen}
                  />
                )}
              />
              <Route exact path="/bio" component={Bio} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </ScrollToTop>
        </Router>
      </SiteWrapper>
    </AppContainer>
  );
};

export default App;
