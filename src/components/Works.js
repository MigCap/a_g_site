import React, { Component } from 'react';

import styled from 'styled-components/macro';
import { theme, mixins, media, Main } from '../styles';
const { colors } = theme;

export default class Works extends Component {
  render() {
    const Title = styled.h1`
      font-size: 0.9em;
      margin: 3rem 0;
      border-bottom: solid 1px #ddd;
    `;

    return (
      <Main>
        <Title>Momentum</Title>
      </Main>
    );
  }
}
