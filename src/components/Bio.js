import React, { Fragment } from 'react'
import Footer from './Footer'

import { bioPic } from '../constants/images'
import { bioInfo } from '../constants/bio'

import { getFirstWord, getRestOfString } from '../utils/base'

import styled from 'styled-components/macro'
import { Main, theme, media } from '../styles'
const { colors } = theme

const BioWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    color: ${colors.lightGrey};

    ${media.desktop`
    background-color: transparent;
  `};
    ${media.tablet`
    flex-direction: row;    
  `};
    ${media.phablet`
  flex-direction: column;
  `};

    div {
        padding: 0 50px 0 0;
        width: 60%;
        ${media.tablet`
      padding: 0 30px 0 0;
      width: 60%;    
    `};
        ${media.phablet`
      padding: 0 0 30px 0;
      width: 100%;    
    `};

        p {
            text-align: justify;
        }
    }
`

const BioPic = styled.img`
    padding: 0;
    width: 40%;
    ${media.tablet`
    width: 40%;    
  `};
    ${media.phablet`
    width: 100%;    
  `};
`

const InfoWrapper = styled.div`
    padding-top: 50px;
    color: ${colors.lightGrey};

    p {
        padding: 0;
        margin: 0;
    }
`

const InfoTitle = styled.h1`
    color: ${colors.darkGrey};
    font-size: 0.7rem;
    padding-top: 1rem;
    margin: 0;
`

const InfoYear = styled.h5`
    color: ${colors.darkGrey};
    padding: 0.5rem 0;
    margin: 0;
`

const InfoLink = styled.a`
    padding: 0;
    &:hover {
        color: ${colors.grey};
    }
`

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
