import React from 'react'
import LazyLoad from 'react-lazyload'

import { Title, GalleryWrapper, ImgWrapper, ImgButton, Img } from './styles'

function WorkGallery({ work: { id, title, images }, handleImgClick }) {
    return (
        <>
            <Title>{title}</Title>
            <GalleryWrapper id={`${title}-gallery-wrapper`}>
                {images &&
                    images.map(({ alt, source, width, height }, index) => (
                        <LazyLoad
                            height={height}
                            offset={800}
                            once={true}
                            key={index.toString()}
                        >
                            <ImgWrapper>
                                <ImgButton
                                    onClick={() => {
                                        handleImgClick({ workId: id, index })
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
