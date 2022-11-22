/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ScrollToTop from 'utils/ScrollToTop'

import Nav from 'components/HeaderNav/HeaderNav'
import Home from 'pages/Home'
import Works from 'pages/Works/Works'
import WorkDetail from 'pages/WorkDetail/WorkDetail'
import Bio from 'pages/Bio/Bio'
import Contact from 'pages/Contact'
import NoMatch from 'pages/NoMatch'

function Routes() {
    return (
        <>
            <Router>
                <Nav />
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/works" component={Works} />
                        <Route
                            exact
                            path="/works/:workId/:index"
                            component={WorkDetail}
                        />
                        <Route exact path="/bio" component={Bio} />
                        <Route exact path="/contact" component={Contact} />
                        <Route component={NoMatch} />
                    </Switch>
                </ScrollToTop>
            </Router>
        </>
    )
}

export default Routes
