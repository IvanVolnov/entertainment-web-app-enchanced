import styled from 'styled-components';
import { media } from '../../styles/Global';

const Heading = styled.h1`
  height: 2rem;
  font-weight: 300;
  letter-spacing: -0.04rem;

  @media ${media.mobile} {
    font-size: 1.25rem;
    height: min-content;
    letter-spacing: -0.02em;
  }
`;

export default Heading;
