import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { media } from '../styles/Global';

import searchIcon from '/icon-search.svg';

const Form = styled.form`
  display: flex;
  gap: 1.5rem;
  @media ${media.tablet} {
    margin: 1.44rem 1.56rem;
  }
`;

const SearchBtn = styled.button`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  background-image: url(${(props) => props.$image});
`;

const Input = styled.input`
  font-weight: 300;
  flex-grow: 1;
  padding-bottom: 1rem;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 1.5rem;
  caret-color: ${({ theme }) => theme.colors.highlight};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Search({ mode }) {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const secondPlaceholder =
    mode === 'bookmarked'
      ? 'bookmarked shows'
      : mode === 'movie'
        ? 'movies'
        : mode === 'tv'
          ? 'TV shows'
          : 'movies or TV series';

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setSearchParams({ query: data.query });
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SearchBtn type='submit' $image={searchIcon} />
        <Input name='query' placeholder={`Search for ${secondPlaceholder}`} />
      </Form>
    </>
  );
}
