import styled from 'styled-components/macro'

import { theme, media } from 'styles'

export const { colors, navHeight } = theme

export const WorkDetailWrapper = styled.div`
    /* margin-top: calc(${navHeight} + 0.3rem); */
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 0.7rem;
    font-weight: 900;
    margin: 2rem 0 3rem 0;
    ${media.desktop`
        margin: 1rem 0 1rem 0;
      `};
    ${media.tablet`
        margin: 0.5rem 0 1rem 0;
      `};
    ${media.phablet`
        margin: 0.5rem 0 1rem 0; 
      `};
`

export const Img = styled.img`
    max-height: 65vh;
    max-width: 70vw;
`

export const ImgCaptionWrapper = styled.div`
    color: colors.grey;
    padding-top: 10px;
`
