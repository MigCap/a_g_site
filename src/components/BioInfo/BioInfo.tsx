/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from 'react'

import { bioInfo } from 'constants/bio'

import { getFirstWord, getRestOfString } from 'utils/base'

import { InfoTitle, InfoYear, InfoLink } from './bioInfo.styles'

function BioInfo() {
    const renderExhibitions = (data: any) => {
        return (
            <>
                {data.exhibitions &&
                    data.exhibitions.map((exhibition: any, index: number) => (
                        <p key={index.toString()}>{exhibition}</p>
                    ))}
            </>
        )
    }

    const renderCollectionsEducationAwardsAndGrants = (
        info: any,
        data: any,
    ) => {
        return (
            <>
                {!data.exhibitions && !data.text && (
                    <p>
                        {info.title === 'AWARDS & GRANTS' ? (
                            <span style={{ color: 'black' }}>
                                {getFirstWord(data)}
                            </span>
                        ) : (
                            getFirstWord(data)
                        )}
                        {/* {getFirstWord(data)} */}
                        {getRestOfString(data)}
                    </p>
                )}
            </>
        )
    }

    const renderSelectedPressAndPublications = (data: any) => {
        return (
            <>
                {data.text && data.src ? (
                    <InfoLink
                        href={data.src}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Read more about Selected Press or Publication"
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
            </>
        )
    }

    return (
        <>
            {bioInfo.map((info, index) => (
                <Fragment key={`${info?.title}-${index.toString()}`}>
                    <InfoTitle>{info.title}</InfoTitle>

                    {info.values.map((data: any, index) => (
                        <Fragment key={index.toString()}>
                            <InfoYear>{data.year && data.year}</InfoYear>
                            {renderExhibitions(data)}
                            {renderCollectionsEducationAwardsAndGrants(
                                info,
                                data,
                            )}
                            {renderSelectedPressAndPublications(data)}
                        </Fragment>
                    ))}
                </Fragment>
            ))}
        </>
    )
}

export default BioInfo
