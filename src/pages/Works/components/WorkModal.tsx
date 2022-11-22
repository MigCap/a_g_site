import React from 'react'
// import Carousel, { Modal, ModalGateway } from 'react-images'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import shallow from 'zustand/shallow'

import { useGlobalStore } from 'app/store/global.store'

import Modal from 'components/Modal'

import { TToogleModal, TGetIndex, TGetViews } from '../types'

import { ModalImg, colors } from '../works.styles'

interface IWorkModalProps {
    toogleModal: TToogleModal
    getIndex: TGetIndex
    getViews: TGetViews
}

function WorkModal({ toogleModal, getIndex, getViews }: IWorkModalProps) {
    const { worksModalIsOpen } = useGlobalStore(
        state => ({
            worksModalIsOpen: state.worksModalIsOpen,
        }),
        shallow,
    )

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true,
        //         },
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             initialSlide: 2,
        //         },
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         },
        //     },
        // ],
    }

    const currentImg = getViews()?.[getIndex()]

    const caption = currentImg?.caption
    const startString = caption?.substr(0, caption.indexOf('-'))
    const endString = caption?.substr(caption.indexOf('-'), caption.length)

    return (
        <Modal active={worksModalIsOpen} hideModal={toogleModal}>
            <Slider {...settings}>
                <div>
                    <ModalImg src={currentImg?.source?.regular} />
                    <div
                        style={{ color: `${colors.grey}`, paddingTop: '10px' }}
                    >
                        <p>
                            <strong>{startString}</strong>
                            {endString}
                        </p>
                    </div>
                </div>
            </Slider>
        </Modal>
    )
}

// function WorkModal({ worksModalIsOpen, toogleModal, getIndex, getViews }: any) {
//     return (
//         <ModalGateway>
//             {worksModalIsOpen ? (
//                 <Modal
//                     onClose={toogleModal}
//                     allowFullscreen={false}
//                     closeOnBackdropClick={true}
//                     closeOnEsc={true}
//                 >
//                     <Carousel
//                         components={{
//                             FooterCaption: ModalFooterCaption,
//                         }}
//                         currentIndex={getIndex()}
//                         views={getViews()}
//                         hideControlsWhenIdle={2000}
//                         trackProps={{ infinite: true }}
//                         frameProps={{ accessibility: true }}
//                         styles={customStylesLightBox}
//                     />
//                 </Modal>
//             ) : null}
//         </ModalGateway>
//     )
// }

// const ModalFooterCaption = ({ innerProps, currentView, currentIndex }: any) => {
//     const caption = currentView.caption
//     const startString = caption.substr(0, caption.indexOf('-'))
//     const endString = caption.substr(caption.indexOf('-'), caption.length)

//     return (
//         <div style={{ color: `${colors.grey}`, paddingTop: '10px' }}>
//             <p>
//                 <strong>{startString}</strong>
//                 {endString}
//             </p>
//         </div>
//     )
// }

export default WorkModal
