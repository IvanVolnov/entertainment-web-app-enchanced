import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { media } from '../styles/Global';

import searchIcon from '/icon-search.svg';

const Form = styled.form`
  display: flex;
  gap: 1.5rem;
  @media ${media.mobile} {
    gap: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const SearchBtn = styled.button`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  background-image: url(${(props) => props.$image});
  @media ${media.mobile} {
    width: 1.5rem;
    height: 1.5rem;
    background-size: contain;
  }
`;

const Input = styled.input`
  font-weight: 300;
  flex-grow: 1;
  padding-bottom: 1rem;
  margin-right: 2.25rem;
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

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text} !important;
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.background}
      inset !important;
  }
  &:-webkit-autofill::placeholder {
    font-size: 3rem; /* Adjust the font size for placeholder text */
    opacity: 1; /* Ensure the placeholder text is visible */
  }

  @media ${media.mobile} {
    font-size: 1rem;
    padding-bottom: unset;
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
