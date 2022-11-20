import React from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'

import { customStylesLightBox, colors } from './styles'

function WorkModal({ worksModalIsOpen, toogleModal, getIndex, getViews }) {
    return (
        <ModalGateway>
            {worksModalIsOpen ? (
                <Modal
                    onClose={toogleModal}
                    allowFullscreen={false}
                    closeOnBackdropClick={true}
                    closeOnEsc={true}
                >
                    <Carousel
                        components={{
                            FooterCaption: ModalFooterCaption,
                        }}
                        currentIndex={getIndex()}
                        views={getViews()}
                        hideControlsWhenIdle={2000}
                        trackProps={{ infinite: true }}
                        frameProps={{ accessibility: true }}
                        styles={customStylesLightBox}
                    />
                </Modal>
            ) : null}
        </ModalGateway>
    )
}

const ModalFooterCaption = ({ innerProps, currentView, currentIndex }) => {
    const caption = currentView.caption
    const startString = caption.substr(0, caption.indexOf('-'))
    const endString = caption.substr(caption.indexOf('-'), caption.length)

    return (
        <div style={{ color: `${colors.grey}`, paddingTop: '10px' }}>
            <p>
                <strong>{startString}</strong>
                {endString}
            </p>
        </div>
    )
}

export default WorkModal
