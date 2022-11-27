import React from 'react'
import styled from 'styled-components/macro'

const DotWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`
const Dot = styled.div<{ delay?: string }>`
    background-color: black;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    /* Animation */
    @keyframes bounce-animation {
        0% {
            margin-bottom: 0;
        }
        50% {
            margin-bottom: 15px;
        }
        100% {
            margin-bottom: 0;
        }
    }
    animation: bounce-animation 0.5s linear infinite;
    animation-delay: ${props => props.delay};
`

function SpinnerDots() {
    return (
        <DotWrapper>
            <Dot delay="0s" />
            <Dot delay=".1s" />
            <Dot delay=".2s" />
        </DotWrapper>
    )
}

export default SpinnerDots
