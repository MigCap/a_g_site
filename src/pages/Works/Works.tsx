import React from 'react'

import Footer from 'components/Footer/Footer'

// import WorkModal from './components/WorkModal'
import WorkGallery from './components/WorkGallery'

import { works } from '../../constants/images'

// import useWorks from './hooks/useWorks'

import { Main } from './works.styles'

const Works = () => {
    // const { toogleModal, getIndex, getViews, handleImgClick } = useWorks()

    return (
        <Main>
            {/* <WorkModal
                toogleModal={toogleModal}
                getIndex={getIndex}
                getViews={getViews}
            /> */}
            {Object.entries(works).map(workEntrie => {
                const [key, work] = workEntrie
                return (
                    <WorkGallery
                        work={work}
                        // handleImgClick={handleImgClick}
                        key={key}
                    />
                )
            })}

            <Footer />
        </Main>
    )
}

export default Works
