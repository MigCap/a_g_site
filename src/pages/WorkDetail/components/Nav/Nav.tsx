import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
// import { FaArrowLeft, FaArrowRight, FaAlignJustify } from 'react-icons/fa'
import { BiLeftArrow, BiRightArrow, BiBorderAll } from 'react-icons/bi'

import { works, WORKS_IDS } from 'constants/images'

import { NavWrapper, NavIconsWrapper } from './nav.styles'

function Nav() {
    const history = useHistory()
    const { workId, index: i } = useParams<{ workId: string; index: string }>()

    const index = Number(i)

    const currentWork = works?.[workId as WORKS_IDS]
    const currentWorkImgs = currentWork?.images

    return (
        <NavWrapper>
            <NavIconsWrapper>
                <BiLeftArrow
                    onClick={() => {
                        history.push(
                            `/works/${workId}/${
                                index > 0
                                    ? index - 1
                                    : currentWorkImgs?.length - 1
                            }`,
                        )
                    }}
                />
            </NavIconsWrapper>
            <NavIconsWrapper>
                <BiBorderAll
                    onClick={() => {
                        history.push(`/works`)
                    }}
                />
            </NavIconsWrapper>
            <NavIconsWrapper>
                <BiRightArrow
                    onClick={() => {
                        history.push(
                            `/works/${workId}/${
                                index + 1 <= currentWorkImgs?.length - 1
                                    ? index + 1
                                    : 0
                            }`,
                        )
                    }}
                />
            </NavIconsWrapper>
        </NavWrapper>
    )
}

export default Nav
