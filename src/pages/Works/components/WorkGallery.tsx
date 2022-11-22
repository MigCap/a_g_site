import React from 'react'
import LazyLoad from 'react-lazyload'
import { useHistory } from 'react-router-dom'

import { IWork } from 'constants/images'

// import { THandleImgClick } from '../types'

import {
    Title,
    GalleryWrapper,
    ImgWrapper,
    ImgButton,
    Img,
} from '../works.styles'

interface IWorkGalleryProps {
    work: IWork
}

function WorkGallery({ work: { id, title, images } }: IWorkGalleryProps) {
    const history = useHistory()

    return (
        <>
            <Title>{title}</Title>
            <GalleryWrapper id={`${title}-gallery-wrapper`}>
                {images &&
                    images.map(({ alt, source, height }, index: number) => (
                        <LazyLoad
                            height={height}
                            offset={800}
                            once={true}
                            key={index.toString()}
                        >
                            <ImgWrapper>
                                <ImgButton
                                    onClick={() => {
                                        // handleImgClick({
                                        //     workId: id,
                                        //     index,
                                        // })
                                        history.push(`/works/${id}/${index}`)
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
                    ))}
            </GalleryWrapper>
        </>
    )
}

export default WorkGallery
