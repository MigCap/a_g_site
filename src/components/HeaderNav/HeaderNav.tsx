/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import shallow from 'zustand/shallow'

import { useGlobalStore } from 'app/store/global.store'

import { Transition, NavContainer, NavTitle, NavBar } from './headerNav.styles'

function HeaderNav() {
    const { worksModalIsOpen } = useGlobalStore(
        state => ({ worksModalIsOpen: state.worksModalIsOpen }),
        shallow,
    )

    const match = useRouteMatch<any>('/works/:workId/:index')

    const isWorkDetailPage = !!match?.params?.workId

    const [showNavBar, setShowNavBar] = useState<boolean>(true)
    const [scrollPos, setScrollPos] = useState<number>(0)
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(worksModalIsOpen)

    const handleScroll = useCallback(() => {
        setScrollPos(document.body.getBoundingClientRect().top)
        setShowNavBar(document.body.getBoundingClientRect().top > scrollPos)
    }, [document, scrollPos])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [window, handleScroll])

    useEffect(() => {
        setModalIsOpen(worksModalIsOpen)
    }, [worksModalIsOpen])

    const addShadow =
        document.body.getBoundingClientRect().top !== 0
            ? { boxShadow: '0 15px 15px -2px rgba(0, 0, 0, 0.2)' }
            : {}

    if (isWorkDetailPage) return null

    return (
        <Transition>
            <NavContainer
                className={showNavBar && !modalIsOpen ? 'active' : 'hidden'}
                style={addShadow}
            >
                <NavTitle exact to="/" activeClassName="active">
                    ALEJANDRO GUIJARRO
                </NavTitle>
                <NavBar>
                    <ul>
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
                </NavBar>
            </NavContainer>
        </Transition>
    )
}

export default HeaderNav
