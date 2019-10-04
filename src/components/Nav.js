import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components/macro';
import { theme, media } from '../styles';
const { colors } = theme;

class Nav extends Component {
  static propTypes = {
    worksModalIsOpen: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      showNavBar: true,
      scrollPos: 0,
      modalIsOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    if (this.props.worksModalIsOpen !== prevProps.worksModalIsOpen) {
      this.setState({
        modalIsOpen: this.props.worksModalIsOpen,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      showNavBar: document.body.getBoundingClientRect().top > scrollPos,
    });
  };

  render() {
    const { modalIsOpen, showNavBar } = this.state;
    const addShadow =
      document.body.getBoundingClientRect().top !== 0
        ? { boxShadow: '0 15px 15px -2px rgba(0, 0, 0, 0.2)' }
        : {};

    return (
      <Transition>
        <NavContainer
          className={showNavBar && !modalIsOpen ? 'active' : 'hidden'}
          style={addShadow}>
          <NavTitle exact to="/" activeClassName="active">
            ALEJANDRO GUIJARRO
          </NavTitle>
          <NavBar>
            <ul>
              <li>
                <NavLink to="/works" activeClassName="active">
                  Works
                </NavLink>
              </li>
              <li>
                <NavLink to="/bio" activeClassName="active">
                  Bio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          </NavBar>
        </NavContainer>
      </Transition>
    );
  }
}

export default Nav;

/* STYLES */

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 300ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 300ms ease-out;
    transform: translate(0, -100%);
  }
`;

const NavContainer = styled.nav`
  display: grid;
  align-items: center;
  min-width: 100vw;
  width: 100vw;
  min-height: calc(${theme.navHeight} + 30px);
  height: calc(${theme.navHeight} + 30px);
  position: fixed;
  top: 0;
  left: 0;
  color: ${colors.grey};
  background-color: white;
  text-align: center;
  z-index: 1000;

  ${media.tablet`
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    min-height: ${theme.navHeight};
    height: ${theme.navHeight};
    flex-direction: row;
  `};
  ${media.phablet`
    font-size: 0.9rem;
    min-height: 90px;
    height: 90px;
  `};
  ${media.phone`
    font-size: 0.9rem;
    min-height: 90px;
    height: 90px;
  `};

  ${media.tiny`
    font-size: 0.9rem;
    min-height: 100px;
    height: 100px;
  `};

  & > * {
    width: 100%;
    ${media.tablet`
        width: 100%;
      `};
  }
`;

const NavTitle = styled(NavLink)`
  color: ${colors.grey};
  letter-spacing: 0.4rem;
  padding-top: 0.5rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 900;
  &:hover {
    ${theme.transition};
    color: ${colors.lightGrey};
  }

  ${media.tablet`
    font-size: 0.9rem;
  `};

  ${media.phablet`
    font-size: 0.8rem;
    padding: 0.5rem 0.3rem 0 0.3rem;
    letter-spacing: 0.2rem;
  `};

  ${media.tiny`
    font-size: 0.9rem;
    padding: 1rem 0.3rem 0 0.3rem;
    letter-spacing: 0.2rem;
  `};
`;

const NavBar = styled.nav`
  ${media.tablet`
    padding: 20px 10px;
  `};
  ${media.phablet`
    padding: 20px 10px;
  `};
  ${media.tiny`
    padding: 20px 10px;
  `};
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    li {
      padding: 0 10px 20px 10px;

      a {
        color: ${colors.lightGrey};
        font-size: 0.7rem;
        font-weight: normal;

        ${media.tablet`
          font-size: 0.8rem;
        `};

        ${media.phablet`
          font-size: 0.7rem;
        `};

        ${media.tiny`
          font-size: 0.7rem;
        `};

        &:hover {
          ${theme.transition};
          color: ${colors.black};
        }
      }
      .active {
        font-weight: 900;
        color: ${colors.black};
      }
    }
  }
`;
