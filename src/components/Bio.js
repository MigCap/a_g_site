import React, { Fragment } from 'react';
import Footer from './Footer';

import { bioPic } from '../constants/images';
import { bioInfo } from '../constants/bio';

import styled from 'styled-components/macro';
import { Main, theme, media } from '../styles';
const { colors } = theme;

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
`;

const BioPic = styled.img`
  padding: 0;
  width: 40%;
  ${media.tablet`
    width: 40%;    
  `};
  ${media.phablet`
    width: 100%;    
  `};
`;

const InfoWrapper = styled.div`
  padding-top: 50px;
  color: ${colors.lightGrey};

  p {
    padding: 0;
    margin: 0;
  }
`;

const InfoTitle = styled.h1`
  color: ${colors.darkGrey};
  font-size: 0.7rem;
  padding-top: 1rem;
  margin: 0;
`;

const InfoYear = styled.h5`
  padding: 0.5rem 0;
  margin: 0;
`;

const InfoLink = styled.a`
  padding: 0;
  &:hover {
    color: ${colors.grey};
  }
`;

const Bio = () => (
  <Main>
    <BioWrap>
      <div>
        <p>
          He graduated from the Royal College of Art in 2010 with a MA in
          fineart art.
        </p>

        <p>
          His work examines spatial relations in photographic representation,
          exploring what photography is still allowed and able to do. He makes
          contradictory and paradoxical images, where the boundaries of the
          photographic image break down. The images imply a tension that goes
          back and forth between what can be seen and what can be understood,
          creating a simultaneous sense of appearance and disappearance. By
          undermining our recognizable modes of perception, he questions the
          solidity and the to reality and to truth.
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
                  data.exhibitions.map((exhibition, index) => (
                    <p key={index.toString()}>{exhibition}</p>
                  ))}
                <p>{!data.exhibitions && !data.text && data}</p>
                {data.text && data.src ? (
                  <InfoLink
                    href={data.src}
                    target="_blank"
                    rel="noreferrer noopener">
                    <p>{data.text}</p>
                  </InfoLink>
                ) : (
                  <p>{data.text}</p>
                )}
              </Fragment>
            ))}
        </Fragment>
      ))}
    </InfoWrapper>
    <Footer />
  </Main>
);

export default Bio;
