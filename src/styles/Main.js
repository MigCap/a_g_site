import styled from 'styled-components/macro';
import media from './media';

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  min-height: 100vh;
  padding: 100px 90px;
  ${media.desktop`
    padding: 70px 60px;
  `};
  ${media.tablet`
    padding: 60px 80px;
  `};
  ${media.phablet`
    padding: 40px 30px;
  `};
  h2 {
    ${media.tablet`
      text-align: center;
    `};
  }
`;

export default Main;
