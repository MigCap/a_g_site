import React from 'react'
import styled from 'styled-components/macro'

import Routes from 'app/Routes/Routes'

import { GlobalStyle, theme, media } from 'styles'

const AppContainer = styled.div`
    height: 100%;
    min-height: 100vh;
`

const SiteWrapper = styled.div`
    padding-top: calc(${theme.navHeight} + 1.5rem);
    ${media.tablet`
        padding-top: calc(${theme.navHeight} + 0.5rem);
    `};
    ${media.phone`
        padding-top: 80px;
    `};
`

const App = () => {
    return (
        <AppContainer>
            <GlobalStyle />
            <SiteWrapper>
                <Routes />
            </SiteWrapper>
        </AppContainer>
    )
}

export default App
