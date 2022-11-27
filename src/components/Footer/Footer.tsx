import React from 'react'
import { NavLink } from 'react-router-dom'

import { smoothScroll } from 'components/SmoothScroll/SmoothScroll'

import { IconInstagram } from '../icons'

import {
    FooterContainer,
    FooterSocialIcons,
    FooterBackToTop,
    FooterNav,
    Rights,
} from './footer.styles'

const scrollToTop = () => {
    smoothScroll.scrollTo('root')
}

const Footer = () => (
    <FooterContainer>
        <FooterSocialIcons>
            <a
                href="https://www.instagram.com/alejandroguijarrostudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to Alejandro Guijarro Instagram profile"
            >
                <IconInstagram />
            </a>
        </FooterSocialIcons>
        <FooterBackToTop>
            <button onClick={() => scrollToTop()}>Back to Top &uarr;</button>
        </FooterBackToTop>
        <FooterNav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/works" activeClassName="active">
                        Works
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bio" activeClassName="active">
                        Bio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </FooterNav>
        <Rights>
            <p>
                &copy; {new Date().getFullYear()} Alejandro Guijarro All Rights
                Reserved. Designed & built by{' '}
                <a
                    href="https://www.miguelcapellan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Go to site builder site"
                >
                    MCV
                </a>
            </p>
        </Rights>
    </FooterContainer>
)

export default Footer
