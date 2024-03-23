import styled from 'styled-components';
import { media } from '../../styles/Global';

export const FilmGrid = styled.div`
  margin-top: 0.6rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10.25rem, 17.5rem));
  gap: 2rem 2.5rem;
  button {
    opacity: 1;
  }

  @media ${media.tablet} {
    margin-top: unset;
    grid-template-columns: repeat(auto-fit, minmax(5.25rem, 13.75rem));
    gap: 1.5rem 1.81rem;
  }

  @media ${media.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(5.25rem, 10.25rem));
    gap: 1rem 0.94rem;
  }
`;
