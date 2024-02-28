import styled from 'styled-components';
import { media } from '../../styles/Global';

const Heading = styled.h1`
  height: 2rem;
  font-weight: 300;
  letter-spacing: -0.04rem;

  @media ${media.mobile} {
    height: 1.25rem;
  }
`;

export default Heading;
