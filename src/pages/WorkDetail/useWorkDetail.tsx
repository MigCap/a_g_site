/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { ROUTES_PATHS } from 'app/Routes/routesConfig'
import { works, WORKS_IDS } from 'constants/images'

function useWorkDetail() {
    const [imgLoaded, setImgLoaded] = useState(false)
    const [touchPosition, setTouchPosition] = useState(null)

    const { workId, index: i } = useParams<{ workId: string; index: string }>()
    const history = useHistory()

    const index = Number(i)

    const currentWork = works?.[workId as WORKS_IDS]
    const currentWorkImgs = currentWork?.images
    const currentImg = currentWorkImgs?.[index]
    const { caption } = currentImg
    const hasSeparator = caption.indexOf('-') > 0
    const startString = caption?.substr(0, caption.indexOf('-'))
    const endString = caption?.substr(caption.indexOf('-'), caption.length)

    const imgCaption = (
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
    )

    const prev = () => {
        setImgLoaded(false)
        history.push(
            `${ROUTES_PATHS.WORKS}/${workId}/${
                index > 0 ? index - 1 : currentWorkImgs?.length - 1
            }`,
        )
    }

    const next = () => {
        setImgLoaded(false)
        history.push(
            `${ROUTES_PATHS.WORKS}/${workId}/${
                index + 1 <= currentWorkImgs?.length - 1 ? index + 1 : 0
            }`,
        )
    }

    const goToWorks = () => {
        history.push(`${ROUTES_PATHS.WORKS}`)
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

    const onLoadImg = () => setImgLoaded(true)

    return {
        currentWork,
        currentImg,
        imgCaption,
        handleTouchStart,
        handleTouchMove,
        goToWorks,
        prev,
        next,
        imgLoaded,
        onLoadImg,
    }
}

export default useWorkDetail
