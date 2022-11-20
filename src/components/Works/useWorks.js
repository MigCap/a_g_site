import { useState } from 'react'

import {
    momentumImages,
    leadImages,
    timeLinesImages,
} from '../../constants/images'

export default function useWorks({ setWorksModalIsOpen }) {
    const [momentumIndex, setMomentumIndex] = useState(0)
    const [leadIndex, setLeadIndex] = useState(0)
    const [timeLinesIndex, setTimeLinesIndex] = useState(0)

    const [isMomentum, setIsMomentum] = useState(false)
    const [isLead, setIsLead] = useState(false)
    const [isTimeLines, setIsTimeLines] = useState(false)

    const toogleModal = () => {
        setWorksModalIsOpen(worksModalIsOpen => !worksModalIsOpen)
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

    const handleImgClick = ({ workId, index }) => {
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
