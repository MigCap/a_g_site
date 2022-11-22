import { Dispatch, SetStateAction } from 'react'

import { TImagesArr, WORKS_IDS } from 'constants/images'

export type TWorkModalIsOpen = boolean
export type TSetWorksModalIsOpen = Dispatch<SetStateAction<boolean>>

export type TToogleModal = () => void
export type TGetIndex = () => number
export type TGetViews = () => TImagesArr | undefined
export type THandleImgClick = ({
    workId,
    index,
}: {
    workId: WORKS_IDS
    index: number
}) => void
