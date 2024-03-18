import styled from 'styled-components';

export const FilmGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10.25rem, 17.5rem));
  gap: 2.5rem;
  button {
    opacity: 1;
  }
`;
