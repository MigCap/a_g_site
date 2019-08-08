import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import styled from 'styled-components/macro';
import { theme, media, Main } from '../styles';
import { momentumImages, leadImages } from '../constants/images';

import Carousel, { Modal, ModalGateway } from 'react-images';

const { colors } = theme;

const Works = ({ worksModalIsOpen, setWorksModalIsOpen }) => {
  const Title = styled.h1`
    font-size: 0.9em;
    margin: 3rem 0;
    border-bottom: solid 1px ${colors.lightestGrey};
    ${media.desktop`
        margin: 0 0 1rem 0;
      `};
    ${media.tablet`
        margin: 0 0 1rem 0;
      `};
    ${media.phablet`
        margin: 0 0 1rem 0; 
      `};
  `;

  const GalleryWrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    .showImgs {
      display: grid;
    }
    .hideImgs {
      display: none;
    }
    ${media.tiny`
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      `};
    ${media.phablet`
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      `};
    ${media.netbook`
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      `};
  `;

  const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ImgButton = styled.button`
    padding: 0;
    background-color: transparent;
  `;

  const Img = styled.img`
    min-height: 100px;
  `;

  const customStylesLightBox = {
    container: (base, state) => {
      const log = base;
      // console.log(base);
      return {
        minHeight: '100vh',
        backgroundColor: 'white !important',
      };
    },
    header: (base, state) => {
      const log = base;
      // console.log(base);

      return {
        ...base,
        background: 'none !important',
      };
    },
    headerClose: base => {
      const log = base;
      // console.log(base);
      return {
        ...base,
        color: `${colors.lightGrey}`,
        '&:hover': { color: `${colors.grey}` },
      };
    },
    headerFullscreen: base => {
      const log = base;
      // console.log(base);
      return {
        ...base,
        color: `${colors.lightGrey}`,
        '&:hover': { color: `${colors.grey}` },
      };
    },
    view: (base, state) => {
      const log = base;
      // console.log(base);
      return {
        // none of react-images styles are passed to <View />
        ...base,
      };
    },
    navigationPrev: (base, state) => {
      const log = base;
      // console.log(base);
      return {
        ...base,
        color: `${colors.lightGrey}`,
        background: 'rgba(199, 196, 196, 0.1)',
        '&:hover': { color: `${colors.grey}` },
      };
    },
    navigationNext: (base, state) => {
      const log = base;
      // console.log(base);
      return {
        ...base,
        color: `${colors.lightGrey}`,
        background: 'rgba(199, 196, 196, 0.1)',
        '&:hover': { color: `${colors.grey}` },
      };
    },
    footer: (base, state) => {
      const opacity = state.interactionIsIdle ? 0 : 1;
      const transition = 'opacity 300ms';

      return {
        ...base,
        opacity,
        transition,
        justifyContent: 'center',
        background: 'none !important',
      };
    },
    footerCaption: (base, state) => {
      const log = base;
      // console.log(base);

      return { ...base, color: `${colors.grey}` };
    },
    footerCount: (base, state) => ({ display: 'none' }),
  };

  const ModalFooterCaption = ({ innerProps, currentView, currentIndex }) => {
    // console.log(currentView);
    const caption = currentView.caption;
    // console.log(caption);
    const startString = caption.substr(0, caption.indexOf('-'));
    const endString = caption.substr(caption.indexOf('-'), caption.length);

    return (
      <div style={{ color: `${colors.grey}`, paddingTop: '10px' }}>
        <p>
          <strong>{startString}</strong>
          {endString}
        </p>
      </div>
    );
  };

  const [momentumIndex, setMomentumIndex] = useState(0);
  const [leadIndex, setLeadIndex] = useState(0);
  const [isMomentum, setIsMomentum] = useState(false);
  const [isLead, setIsLead] = useState(false);

  const toogleModal = () => {
    setWorksModalIsOpen(worksModalIsOpen => !worksModalIsOpen);
  };

  return (
    <Main>
      <Title>Momentum</Title>

      <GalleryWrapper id="gallery-wrapper">
        {momentumImages &&
          momentumImages.map(({ src, alt }, index) => (
            <ImgWrapper key={index.toString()}>
              <ImgButton
                onClick={() => {
                  setMomentumIndex(index);
                  setLeadIndex(0);
                  setIsMomentum(true);
                  setIsLead(false);
                  setWorksModalIsOpen(true);
                }}>
                <Img src={src} alt={alt} />
              </ImgButton>
            </ImgWrapper>
          ))}
      </GalleryWrapper>

      <br />
      <br />
      <br />
      <br />
      <Title>Lead</Title>

      <GalleryWrapper id="gallery-wrapper2">
        {leadImages &&
          leadImages.map(({ src, alt }, index) => (
            <ImgWrapper key={index.toString()}>
              <ImgButton
                onClick={() => {
                  setMomentumIndex(0);
                  setLeadIndex(index);
                  setIsMomentum(false);
                  setIsLead(true);
                  setWorksModalIsOpen(true);
                }}>
                <Img src={src} alt={alt} index={index} />
              </ImgButton>
            </ImgWrapper>
          ))}
      </GalleryWrapper>

      <ModalGateway>
        {worksModalIsOpen ? (
          <Modal
            onClose={toogleModal}
            allowFullscreen={true}
            closeOnBackdropClick={true}>
            <Carousel
              styles={customStylesLightBox}
              views={isMomentum ? momentumImages : leadImages}
              currentIndex={isMomentum ? momentumIndex : leadIndex}
              hideControlsWhenIdleNumber={100}
              trackPropsObject={{ infinite: true }}
              components={{
                FooterCaption: ModalFooterCaption,
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Main>
  );
};

export default Works;

/* Works.PropTypes = {
  setModalIsOpen: PropTypes.func,
  modalIsOpen: PropTypes.bool,
}; */
