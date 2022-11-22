import { useState } from 'react'
import shallow from 'zustand/shallow'

import { useGlobalStore } from 'app/store/global.store'

import {
    momentumImages,
    leadImages,
    timeLinesImages,
    WORKS_IDS,
} from 'constants/images'

export default function useWorks() {
    const { worksModalIsOpen, setWorksModalIsOpen } = useGlobalStore(
        state => ({
            worksModalIsOpen: state.worksModalIsOpen,
            setWorksModalIsOpen: state.setWorksModalIsOpen,
        }),
        shallow,
    )

    const [momentumIndex, setMomentumIndex] = useState(0)
    const [leadIndex, setLeadIndex] = useState(0)
    const [timeLinesIndex, setTimeLinesIndex] = useState(0)

    const [isMomentum, setIsMomentum] = useState(false)
    const [isLead, setIsLead] = useState(false)
    const [isTimeLines, setIsTimeLines] = useState(false)

    const toogleModal = () => {
        setWorksModalIsOpen(!worksModalIsOpen)
    }

    const getIndex = () => {
        if (isMomentum) {
            return momentumIndex
        }
        if (isLead) {
            return leadIndex
        }
        if (isTimeLines) {
            return timeLinesIndex
        }
        return 0
    }

    const getViews = () => {
        if (isMomentum) {
            return momentumImages
        }
        if (isLead) {
            return leadImages
        }
        if (isTimeLines) {
            return timeLinesImages
        }
    }

    const handleImgClick = ({
        workId,
        index,
    }: {
        workId: WORKS_IDS
        index: number
    }) => {
        switch (workId) {
            case 'momentum':
                setMomentumIndex(index)
                setLeadIndex(0)
                setTimeLinesIndex(0)
                setIsMomentum(true)
                setIsLead(false)
                setIsTimeLines(false)
                break
            case 'lead':
                setMomentumIndex(0)
                setLeadIndex(index)
                setTimeLinesIndex(0)
                setIsMomentum(false)
                setIsLead(true)
                setIsTimeLines(false)
                break
            case 'timeLines':
                setMomentumIndex(0)
                setLeadIndex(0)
                setTimeLinesIndex(index)
                setIsMomentum(false)
                setIsLead(false)
                setIsTimeLines(true)
                break

            default:
                break
        }
        setWorksModalIsOpen(true)
    }

    return { toogleModal, getIndex, getViews, handleImgClick }
}
