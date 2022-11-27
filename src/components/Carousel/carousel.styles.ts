import styled from 'styled-components/macro'

import { theme } from 'styles'

export const { colors, navHeight } = theme

export const CarouselContainer = styled.div`
    /* margin-top: calc(${navHeight} + 0.3rem); */
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* width: 100%;
    display: flex;
    flex-direction: column; */
`

export const CarouselWrapper = styled.div`
    display: flex;
    width: 100%;
    position: relative;

    /* display: flex;
    width: 100%;
    position: relative; */
`

export const CarouselContentWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;

    /* overflow: hidden;
    width: 100%;
    height: 100%; */
`

export const CarouselContent = styled.div`
    display: flex;
    transition: all 250ms linear;
    -ms-overflow-style: none;
    /* hide scrollbar in IE and Edge */
    scrollbar-width: none;
    /* hide scrollbar in Firefox */

    /* hide scrollbar in webkit browser */
    &::-webkit-scrollbar,
    ::-webkit-scrollbar {
        display: none;
    }
`
