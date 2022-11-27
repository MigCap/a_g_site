import React from 'react'

import WorkGallery from 'components/WorkGallery/WorkGallery'
import Footer from 'components/Footer/Footer'

import { works } from 'constants/images'

import { Main } from 'styles'

const Works = () => {
    return (
        <Main>
            {Object.entries(works).map(workEntrie => {
                const [key, work] = workEntrie
                return <WorkGallery work={work} key={key} />
            })}
            <Footer />
        </Main>
    )
}

export default Works
