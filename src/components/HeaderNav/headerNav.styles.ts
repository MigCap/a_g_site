import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

import { theme, media } from '../../styles'

const { colors } = theme

export const Transition = styled.div`
    .active {
        visibility: visible;
        transition: all 300ms ease-in;
    }
    .hidden {
        visibility: hidden;
        transition: all 300ms ease-out;
        transform: translate(0, -100%);
    }
`

export const NavContainer = styled.nav`
    display: grid;
    align-items: center;
    min-width: 100vw;
    width: 100vw;
    min-height: calc(${theme.navHeight} + 30px);
    height: calc(${theme.navHeight} + 30px);
    position: fixed;
    top: 0;
    left: 0;
    color: ${colors.grey};
    background-color: white;
    text-align: center;
    z-index: 1000;

    ${media.tablet`
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    min-height: ${theme.navHeight};
    height: ${theme.navHeight};
    flex-direction: row;
  `};
    ${media.phablet`
    font-size: 0.9rem;
    min-height: 90px;
    height: 90px;
  `};
    ${media.phone`
    font-size: 0.9rem;
    min-height: 90px;
    height: 90px;
  `};

    ${media.tiny`
    font-size: 0.9rem;
    min-height: 100px;
    height: 100px;
  `};

    & > * {
        width: 100%;
        ${media.tablet`
        width: 100%;
      `};
    }
`

export const NavTitle = styled(NavLink)`
    color: ${colors.grey};
    letter-spacing: 0.4rem;
    padding-top: 0.5rem;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 900;
    &:hover {
        ${theme.transition};
        color: ${colors.lightGrey};
    }

    ${media.tablet`
    font-size: 0.9rem;
    padding: 1rem 0.3rem 0 0.3rem;
    letter-spacing: 0.2rem;
  `};

    ${media.phablet`
    font-size: 0.9rem;
    padding: 1rem 0.3rem 0 0.3rem;
    letter-spacing: 0.2rem;
  `};

    ${media.phone`
    font-size: 0.9rem;
    padding: 1rem 0.3rem 0 0.3rem;
    letter-spacing: 0.2rem;
  `};

    ${media.tiny`
    font-size: 0.9rem;
    padding: 1rem 0.3rem 0 0.3rem;
    letter-spacing: 0.2rem;
  `};
`

export const NavBar = styled.nav`
    ${media.tablet`
    padding: 20px 10px;
  `};
    ${media.phablet`
    padding: 20px 10px;
  `};
    ${media.tiny`
    padding: 20px 10px;
  `};
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        li {
            padding: 0 10px 20px 10px;

            a {
                color: ${colors.lightGrey};
                font-size: 0.7rem;
                font-weight: normal;

                ${media.tablet`
          font-size: 0.7rem;
        `};

                ${media.phablet`
          font-size: 0.7rem;
        `};

                ${media.tiny`
          font-size: 0.8rem;
        `};

                &:hover {
                    ${theme.transition};
                    color: ${colors.black};
                }
            }
            .active {
                font-weight: 900;
                color: ${colors.black};
            }
        }
    }
`
