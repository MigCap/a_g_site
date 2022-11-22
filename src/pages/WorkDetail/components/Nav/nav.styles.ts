import styled from 'styled-components/macro'

import { theme, mixins } from 'styles'

export const { colors, navHeight } = theme

export const NavWrapper = styled.div`
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const NavIconsWrapper = styled.button`
    ${mixins.buttonIcon}
`
