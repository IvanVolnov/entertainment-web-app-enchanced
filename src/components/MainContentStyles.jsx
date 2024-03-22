import styled from 'styled-components';

export const FilmGrid = styled.div`
  margin-top: 0.6rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10.25rem, 17.5rem));
  gap: 2rem 2.5rem;
  button {
    opacity: 1;
  }
`;
