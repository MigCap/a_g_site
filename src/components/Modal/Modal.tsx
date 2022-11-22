/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from 'react'

import {
    ModalBlock,
    ModalBody,
    ModalClose,
    ModalContainer,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
} from './modal.styles'

interface IModalProps {
    title?: string
    footer?: any
    children: any
    active: boolean
    hideModal(): void
}

const Modal = ({ title, footer, children, active, hideModal }: IModalProps) => {
    return (
        <Fragment>
            {active && (
                <ModalBlock>
                    <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
                    <ModalContainer>
                        <ModalHeader>
                            <ModalTitle>{title}</ModalTitle>
                            <ModalClose onClick={() => hideModal()}>
                                X
                            </ModalClose>
                        </ModalHeader>
                        <ModalBody>{children}</ModalBody>
                        <ModalFooter>{footer}</ModalFooter>
                    </ModalContainer>
                </ModalBlock>
            )}
        </Fragment>
    )
}
export default Modal
