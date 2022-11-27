/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

import './carousel.css'

// import { Img, Title } from 'pages/Works/works.styles'
// import {
//     WorkDetailCarouselWrapper,
//     ImgCaptionWrapper,
// } from 'pages/WorkDetail/workDetail.styles'

const Carousel = (props: any) => {
    const { children, show, infiniteLoop } = props

    const { workId, index } = useParams<{ workId: string; index: string }>()

    const initialIndex = Number(index) + 1

    // const currentWork = works?.[workId as WORKS_IDS]
    // const currentWorkImgs = currentWork?.images
    // const currentImg = currentWorkImgs?.[index]
    // const caption = currentImg?.caption
    // const hasSeparator = caption.indexOf('-') > 0
    // const startString = caption?.substr(0, caption.indexOf('-'))
    // const endString = caption?.substr(caption.indexOf('-'), caption.length)

    // const children = currentWorkImgs

    const history = useHistory()

    const [currentIndex, setCurrentIndex] = useState(initialIndex)
    // const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)
    const [length, setLength] = useState(children.length)

    const [isRepeating, setIsRepeating] = useState(
        infiniteLoop && children.length > show,
    )
    const [transitionEnabled, setTransitionEnabled] = useState(true)

    const [touchPosition, setTouchPosition] = useState(null)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
        setIsRepeating(infiniteLoop && children.length > show)
    }, [children, infiniteLoop, show])

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, isRepeating, show, length])

    const next = () => {
        if (isRepeating || currentIndex < length - show) {
            setCurrentIndex((prevState: any) => {
                history.replace(`/works/${workId}/${prevState + 1}`)
                return prevState + 1
            })
        }
    }

    const prev = () => {
        if (isRepeating || currentIndex > 0) {
            setCurrentIndex((prevState: any) => {
                history.replace(`/works/${workId}/${prevState - 1}`)
                return prevState - 1
            })
        }
    }

    const handleTouchStart = (e: any) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e: any) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false)
                setCurrentIndex(length)
            } else if (currentIndex === length + show) {
                setTransitionEnabled(false)
                setCurrentIndex(show)
            }
        }
    }

    const renderExtraPrev = () => {
        const output = []
        for (let index = 0; index < show; index++) {
            output.push(children[length - 1 - index])
        }
        output.reverse()
        return output
    }

    const renderExtraNext = () => {
        const output = []
        for (let index = 0; index < show; index++) {
            output.push(children[index])
        }
        return output
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* You can alwas change the content of the button to other things */}
                {(isRepeating || currentIndex > 0) && (
                    <button onClick={prev} className="left-arrow">
                        {/* &lt; */}
                        <BiLeftArrow />
                    </button>
                )}
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content show-${show}`}
                        style={{
                            transform: `translateX(-${currentIndex *
                                (100 / show)}%)`,
                            transition: !transitionEnabled ? 'none' : undefined,
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}
                    >
                        {length > show && isRepeating && renderExtraPrev()}
                        {children}
                        {length > show && isRepeating && renderExtraNext()}
                    </div>
                    {/* <NavWrapper>
                        {isRepeating ||
                            (currentIndex > 0 && (
                                <NavIconsWrapper onClick={prev}>
                                    <BiLeftArrow />
                                </NavIconsWrapper>
                            ))}
                        <NavIconsWrapper
                            onClick={() => {
                                history.push(`/works`)
                            }}
                            style={{ marginTop: '2rem' }}
                        >
                            <BiBorderAll />
                        </NavIconsWrapper>
                        {isRepeating ||
                            (currentIndex < length - show && (
                                <NavIconsWrapper onClick={next}>
                                    <BiRightArrow />
                                </NavIconsWrapper>
                            ))}
                    </NavWrapper> */}
                </div>
                {/* You can alwas change the content of the button to other things */}
                {(isRepeating || currentIndex < length - show) && (
                    <button onClick={next} className="right-arrow">
                        {/* &gt; */}
                        <BiRightArrow />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Carousel
