import React from 'react'

import { works } from '../../constants/images'

import { Main } from './styles'

import WorkGallery from './WorkGallery'
import WorkModal from './WorkModal'
import Footer from '../Footer'

import useWorks from './useWorks'

const Works = ({ worksModalIsOpen, setWorksModalIsOpen }) => {
    const { toogleModal, getIndex, getViews, handleImgClick } = useWorks({
        setWorksModalIsOpen,
    })

    return (
        <Main>
            {works.map(work => {
                return (
                    <WorkGallery
                        work={work}
                        handleImgClick={handleImgClick}
                        key={work.id}
                    />
                )
            })}
            <WorkModal
                worksModalIsOpen={worksModalIsOpen}
                toogleModal={toogleModal}
                getIndex={getIndex}
                getViews={getViews}
            />
            <Footer />
        </Main>
    )
}

export default Works
