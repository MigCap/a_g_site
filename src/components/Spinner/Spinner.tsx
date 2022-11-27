import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

import { theme } from 'styles'

const { colors } = theme

const SpinnerWrapper = styled.div`
    width: 80px;
    height: 100px;
    margin: 100px auto;
    margin-top: calc(100vh / 2 - 50%);
`

const wave = keyframes`
    0%   { top: 0;     opacity: 1; }
    50%  { top: 30px;  opacity: .2; }
    100% { top: 0;     opacity: 1; }
  `

const Block = styled.div`
    position: relative;
    box-sizing: border-box;
    float: left;
    margin: 0 10px 10px 0;
    width: 12px;
    height: 12px;
    border-radius: 3px;
    background: ${colors.lightGrey};
    &:nth-child(4n + 1) {
        animation: ${wave} 2s ease 0s infinite;
    }
    &:nth-child(4n + 2) {
        animation: ${wave} 2s ease 0.2s infinite;
    }
    &:nth-child(4n + 3) {
        animation: ${wave} 2s ease 0.4s infinite;
    }
    &:nth-child(4n + 4) {
        animation: ${wave} 2s ease 0.6s infinite;
        margin-right: 0;
    }
`

const Spinner = () => {
    return (
        <SpinnerWrapper className="container">
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
        </SpinnerWrapper>
    )
}

export default Spinner
