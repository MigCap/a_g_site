import React, { Fragment } from 'react'
import Footer from '../Footer'

import { bioPic } from '../../constants/images'
import { bioInfo } from '../../constants/bio'

import { getFirstWord, getRestOfString } from '../../utils/base'

import { Main } from '../../styles'

import {
    BioWrap,
    BioPic,
    InfoWrapper,
    InfoTitle,
    InfoYear,
    InfoLink,
} from './styles'

const Bio = () => (
    <Main>
        <BioWrap>
            <div>
                <p>
                    Alejandro Guijarro is a London and Madrid based artist,
                    working within spaces between photography, drawing and
                    painting. His work explores new possibilities of
                    contemporary photography, questioning its ability to refer
                    to reality or truth.{' '}
                </p>
                <p>
                    Since completing his MA at the Royal College of Art, he has
                    been involved in numerous exhibitions internationally and
                    his work remains in private collections, such as the
                    Frank-Suss collection, Sammlung Goetz the Saatchi Gallery.
                </p>
                <p>
                    Guijarro´s Practice has been featured and reviewed in the
                    British Journal of Photography, The Guardian, Wall Street
                    journal, The Atlantic, Harvard Business review among others.
                </p>
            </div>
            <BioPic src={bioPic.src} alt="Alejandro Guijarro profile pic" />
        </BioWrap>
        <InfoWrapper>
            {bioInfo.map((info, index) => (
                <Fragment key={index.toString()}>
                    <InfoTitle>{info.title}</InfoTitle>
                    {info.values &&
                        info.values.map((data, index) => (
                            <Fragment key={index.toString()}>
                                <InfoYear>{data.year && data.year}</InfoYear>
                                {data.exhibitions &&
                                    data.exhibitions.map(
                                        (exhibition, index) => (
                                            <p key={index.toString()}>
                                                {exhibition}
                                            </p>
                                        ),
                                    )}
                                {!data.exhibitions &&
                                    !data.text &&
                                    info.title !== 'AWARDS & GRANTS' && (
                                        <p>
                                            {getFirstWord(data)}
                                            {getRestOfString(data)}
                                        </p>
                                    )}
                                {!data.exhibitions &&
                                    !data.text &&
                                    info.title === 'AWARDS & GRANTS' && (
                                        <p>
                                            <span style={{ color: 'black' }}>
                                                {getFirstWord(data)}
                                            </span>
                                            {getRestOfString(data)}
                                        </p>
                                    )}
                                {data.text && data.src ? (
                                    <InfoLink
                                        href={data.src}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <p>
                                            <span style={{ color: 'black' }}>
                                                {getFirstWord(data.text)}
                                            </span>
                                            {getRestOfString(data.text)}
                                        </p>
                                    </InfoLink>
                                ) : (
                                    <p>
                                        <span style={{ color: 'black' }}>
                                            {getFirstWord(data.text)}
                                        </span>
                                        {getRestOfString(data.text)}
                                    </p>
                                )}
                            </Fragment>
                        ))}
                </Fragment>
            ))}
        </InfoWrapper>
        <Footer />
    </Main>
)

export default Bio
