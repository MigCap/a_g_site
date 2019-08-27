import styled from 'styled-components/macro';
import media from './media';

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
  min-height: 100vh;
  padding: 100px 90px;
  ${media.desktop`
    padding: 70px 60px;
  `};
  ${media.tablet`
    padding: 40px 50px;
  `};
  ${media.phablet`
    padding: 40px 20px;
  `};
  ${media.phone`
    padding: 0 20px;
  `};
  h2 {
    ${media.tablet`
      text-align: center;
    `};
  }
`;

export default Main;
