import styled from 'styled-components/macro'

import { theme } from 'styles'

const { colors } = theme

export const InfoTitle = styled.h1`
    color: ${colors.darkGrey};
    font-size: 0.7rem;
    padding-top: 1rem;
    margin: 0;
`

export const InfoYear = styled.h5`
    color: ${colors.darkGrey};
    padding: 0.5rem 0;
    margin: 0;
`

export const InfoLink = styled.a`
    padding: 0;
    &:hover {
        color: ${colors.grey};
    }
`
