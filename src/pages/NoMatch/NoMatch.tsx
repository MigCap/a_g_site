/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import styled from 'styled-components/macro'

import { Main } from '../../styles'

const NoMatchWrapper = styled.div`
    font-size: 1em;
    text-align: center;
`

const NoMatch = ({ location }: any) => (
    <Main>
        <NoMatchWrapper>
            <p>
                No match for <code>{location.pathname}</code>
            </p>
        </NoMatchWrapper>
    </Main>
)

export default NoMatch
