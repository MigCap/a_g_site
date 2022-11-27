import styled from 'styled-components/macro'

import { theme, media } from 'styles'

const { colors } = theme

export const BioWrap = styled.div`
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

export const BioPic = styled.img`
    padding: 0;
    width: 40%;
    ${media.tablet`
      width: 40%;    
    `};
    ${media.phablet`
      width: 100%;
    `};
`

export const InfoWrapper = styled.div`
    padding-top: 50px;
    color: ${colors.lightGrey};

    p {
        padding: 0;
        margin: 0;
    }
`
