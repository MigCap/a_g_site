/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import Biography from 'components/Biography/Biography'
import BioInfo from 'components/BioInfo/BioInfo'
import Footer from 'components/Footer/Footer'

import { bioPic } from 'constants/images'

import { Main } from 'styles'

import { BioWrap, BioPic, InfoWrapper } from './bio.styles'

const Bio = () => {
    return (
        <Main>
            <BioWrap>
                <Biography />
                <BioPic src={bioPic.src} alt="Alejandro Guijarro profile pic" />
            </BioWrap>
            <InfoWrapper>
                <BioInfo />
            </InfoWrapper>
            <Footer />
        </Main>
    )
}

export default Bio
