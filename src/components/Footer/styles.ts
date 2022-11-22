import styled from 'styled-components/macro'

import { theme, media } from '../../styles'

const { colors } = theme

export const FooterContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 100%;
    grid-template-areas:
        'instagram backToTop nav'
        'rights rights rights';
    align-items: center;
    min-width: 100%;
    width: 100%;
    min-height: 50px;
    height: 100px;
    color: ${colors.grey};
    background-color: white;
    font-size: 0.6rem;
    text-align: center;
    z-index: 100;
    border-top: solid 0.5px ${colors.lightestGrey};
    margin-top: 50px;
    padding-top: 20px;

    ${media.desktop`
    padding: 1rem 0 5rem 0;
  `};
    ${media.tablet`
    padding: 1rem 0 4rem 0;
  `};
    ${media.phablet`
    padding: 1rem 0 4rem 0;
    grid-template-areas: 
      "instagram nav backToTop"
      "rights rights rights";
  `};
    ${media.tiny`
    padding: 1rem 0 4rem 0;
    grid-template-rows: auto 70px 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "nav nav"
      "instagram backToTop"
      "rights rights";
  `};
`

export const FooterSocialIcons = styled.div`
    grid-area: instagram;
    justify-self: start;
    ${media.tiny`
    justify-self: center;
  `};

    a {
        padding: 0 5px;
        width: 1.2rem;
        color: ${colors.lightGrey};
        &:hover {
            ${theme.transition};
            color: ${colors.black};
        }
    }
`

export const FooterBackToTop = styled.div`
    grid-area: backToTop;

    ${media.phablet`
    justify-self: end;
  `};
    ${media.tiny`
    justify-self: start;
  `};

    button {
        color: ${colors.lightGrey};
        font-size: 0.6rem;
        background-color: transparent;
        &:hover {
            ${theme.transition};
            color: ${colors.black};
        }
    }
`

export const FooterNav = styled.nav`
    grid-area: nav;
    margin: 0;
    padding: 0;
    justify-self: end;

    ${media.phablet`
    justify-self: center;
  `};
    ${media.tiny`
    grid-row: 1;
    grid-column: 1 / span 3;
  `};

    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        li {
            color: ${colors.lightGrey};
            padding: 0 5px;
            font-weight: 200;
            border-right: solid 1px ${colors.lightestGrey};
            &:last-child {
                border-right: none;
            }
            .active {
                font-weight: 900;
                color: ${colors.black};
            }
            a {
                &:hover {
                    ${theme.transition};
                    color: ${colors.black};
                }
            }
        }
    }
`

export const Rights = styled.div`
    grid-area: rights;
    grid-column: 1 / span 3;
    grid-row: 2;
    padding-top: 5rem;

    ${media.desktop`
    justify-self: end;
  `};
    ${media.tablet`
    justify-self: center;
  `};
    ${media.tiny`
  `};

    p {
        color: ${colors.lightGrey};
        padding: 0 5px;
        a {
            &:hover {
                ${theme.transition};
                color: ${colors.black};
            }
        }
    }
`
