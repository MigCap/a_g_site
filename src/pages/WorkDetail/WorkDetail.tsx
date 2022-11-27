/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { BiLeftArrow, BiBorderAll, BiRightArrow } from 'react-icons/bi'

import SpinnerDots from 'components/Spinner/SpinnerDots'
import Footer from 'components/Footer/Footer'

import useWorkDetail from './useWorkDetail'

import {
    WorkDetailWrapper,
    WorkDetailImgArrowsWrapper,
    BtnIcon,
    LeftArrow,
    RightArrow,
    Img,
    ImgCaptionWrapper,
    Title,
    FooterWrapper,
} from './workDetail.styles'

function WorkDetail() {
    const { workId } = useParams<{ workId: string; index: string }>()

    const wrapperRef = useRef<HTMLDivElement>(null)

    if (workId) {
        const {
            currentWork,
            currentImg: {
                alt,
                source: { regular },
            },
            imgCaption,
            handleTouchStart,
            handleTouchMove,
            goToWorks,
            prev,
            next,
            imgLoaded,
            onLoadImg,
        } = useWorkDetail()

        return (
            <>
                <WorkDetailWrapper
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    ref={wrapperRef}
                >
                    <WorkDetailImgArrowsWrapper>
                        <LeftArrow>
                            <BtnIcon
                                id="previousBtn"
                                aria-label="Previous Image"
                            >
                                <BiLeftArrow onClick={prev} />
                            </BtnIcon>
                        </LeftArrow>
                        {!imgLoaded && <SpinnerDots />}
                        <Img
                            src={regular}
                            alt={alt}
                            onLoad={onLoadImg}
                            style={imgLoaded ? {} : { display: 'none' }}
                        />
                        <RightArrow>
                            <BtnIcon id="nextBtn" aria-label="Next Image">
                                <BiRightArrow onClick={next} />
                            </BtnIcon>
                        </RightArrow>
                    </WorkDetailImgArrowsWrapper>
                    <Title>{currentWork?.title}</Title>
                    <ImgCaptionWrapper>{imgCaption}</ImgCaptionWrapper>
                    <BtnIcon
                        id="backToWorksBtn"
                        onClick={goToWorks}
                        style={{ marginTop: '1rem' }}
                        aria-label="Back to Works"
                    >
                        <BiBorderAll />
                    </BtnIcon>
                </WorkDetailWrapper>
                <FooterWrapper>
                    <Footer />
                </FooterWrapper>
            </>
        )
    }
    return null
}

export default WorkDetail
