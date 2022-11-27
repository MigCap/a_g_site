import React from 'react'
import { useHistory } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

import { IWork } from 'constants/images'

import {
    Title,
    GalleryWrapper,
    ImgWrapper,
    ImgButton,
    Img,
} from './workGallery.styles'

interface IWorkGalleryProps {
    work: IWork
}

function WorkGallery({
    work: { id: workId, title, images },
}: IWorkGalleryProps) {
    const history = useHistory()

    return (
        <>
            <Title>{title}</Title>
            <GalleryWrapper id={`${title}-gallery-wrapper`}>
                {images?.map(({ alt, source, height }, index: number) => {
                    if (index < 12) {
                        return (
                            <LazyLoad
                                height={height}
                                offset={800}
                                once={true}
                                key={source?.regular}
                            >
                                <ImgWrapper>
                                    <ImgButton
                                        onClick={() => {
                                            history.push(
                                                `/works/${workId}/${index}`,
                                            )
                                        }}
                                    >
                                        <Img
                                            width="100%"
                                            height="100%"
                                            src={source.thumbnail}
                                            alt={alt}
                                            loading="lazy"
                                            index={index}
                                        />
                                    </ImgButton>
                                </ImgWrapper>
                            </LazyLoad>
                        )
                    }
                    return null
                })}
            </GalleryWrapper>
        </>
    )
}

export default WorkGallery
