import React from 'react'
import { useParams } from 'react-router-dom'

import { works, WORKS_IDS } from 'constants/images'

import Nav from './components/Nav/Nav'

import {
    WorkDetailWrapper,
    Img,
    ImgCaptionWrapper,
    Title,
} from './workDetail.styles'

function WorkDetail() {
    const { workId, index: i } = useParams<{ workId: string; index: string }>()

    const index = Number(i)

    if (workId) {
        const currentWork = works?.[workId as WORKS_IDS]
        const currentWorkImgs = currentWork?.images
        const currentImg = currentWorkImgs?.[index]
        const caption = currentImg?.caption
        const hasSeparator = caption.indexOf('-') > 0
        const startString = caption?.substr(0, caption.indexOf('-'))
        const endString = caption?.substr(caption.indexOf('-'), caption.length)

        return (
            <>
                <WorkDetailWrapper>
                    <Img src={currentImg?.source?.regular} />
                    <Title>{currentWork?.title}</Title>
                    <Nav />
                    <ImgCaptionWrapper>
                        <p>
                            {hasSeparator ? (
                                <>
                                    <strong>{startString}</strong>
                                    {endString}
                                </>
                            ) : (
                                <span>{caption}</span>
                            )}
                        </p>
                    </ImgCaptionWrapper>
                </WorkDetailWrapper>
            </>
        )
    }
    return null
}

export default WorkDetail
