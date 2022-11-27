import styled, { css } from 'styled-components/macro'

import { theme, media, mixins } from 'styles'

import { mainPaddings } from 'styles/Main'

export const { colors, navHeight } = theme

export const WorkDetailWrapper = styled.div`
    margin: 0 2rem;
    ${media.phablet`
    margin: 0 .5rem;
    `};
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const WorkDetailImgArrowsWrapper = styled.div`
    width: 100%;
    height: 70vh;
    ${media.thone`
        height: 40vh;
    `};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const BtnIcon = styled.button`
    ${mixins.buttonIcon}
`

const arrowsBase = css`
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    @media (hover: none) and (pointer: coarse) {
        display: none;
    }
`

const arrowMargin = '3rem'

export const LeftArrow = styled.div`
    ${arrowsBase}
    left: ${() => arrowMargin};
`

export const RightArrow = styled.div`
    ${arrowsBase}
    right: ${() => arrowMargin};
`

export const WorkDetailCarouselWrapper = styled.div`
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
    object-fit: contain;
    ${media.thone`
        max-width: 100%;
    `};
`

export const ImgCaptionWrapper = styled.div`
    color: colors.grey;
    padding-top: 10px;
`

export const FooterWrapper = styled.div`
    ${mainPaddings}
`
