/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components/macro'

import { theme, media, Main as MainFromStyles } from 'styles'

export const Main = MainFromStyles

export const { colors } = theme

export const Title = styled.h1`
    font-size: 0.7rem;
    font-weight: 500;
    margin: 2rem 0 3rem 0;
    border-bottom: solid 1px ${colors.lightestGrey};
    ${media.desktop`
        margin: 2rem 0 1rem 0;
      `};
    ${media.tablet`
        margin: 0 0 1rem 0;
      `};
    ${media.phablet`
        margin: 0 0 1rem 0; 
      `};
`

export const GalleryWrapper = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    ${media.tiny`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`};
    ${media.phablet`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`};
    ${media.netbook`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding-bottom: 90px;
`};
`

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const ImgButton = styled.button`
    padding: 0;
    background-color: transparent;
    &:hover {
        ${theme.transition};
        transform: translateY(-5px);
    }
`

export const Img = styled.img<any>`
    min-height: 100px;
`

export const ModalImg = styled.img`
    max-height: 55vh;
`

export const customStylesLightBox = {
    container: () => ({
        minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex !important',
        alignItems: 'center',
        backgroundColor: 'white !important',
    }),
    header: (base: any) => ({
        ...base,
        background: 'none !important',
    }),
    headerClose: (base: any) => ({
        ...base,
        color: `${colors.lightGrey}`,
        '&:hover': { color: `${colors.grey}` },
    }),
    headerFullscreen: (base: any) => ({
        ...base,
        color: `${colors.lightGrey}`,
        '&:hover': { color: `${colors.grey}` },
    }),
    view: (base: any) =>
        //console.log(state);
        ({
            // none of react-images styles are passed to <View />
            ...base,
        }),
    navigationPrev: (base: any) => ({
        ...base,
        color: `${colors.lightGrey}`,
        background: 'rgba(199, 196, 196, 0.1)',
        '&:hover': { color: `${colors.grey}` },
    }),
    navigationNext: (base: any) => ({
        ...base,
        color: `${colors.lightGrey}`,
        background: 'rgba(199, 196, 196, 0.1)',
        '&:hover': { color: `${colors.grey}` },
    }),
    footer: (base: any, state: { interactionIsIdle: any }) => {
        const opacity = state.interactionIsIdle ? 0 : 1
        const transition = 'opacity 300ms'

        return {
            ...base,
            opacity,
            transition,
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.6) !important',
        }
    },
    footerCaption: (base: any) => ({
        ...base,
        color: `${colors.grey}`,
    }),
    footerCount: () => ({ display: 'none' }),
}
