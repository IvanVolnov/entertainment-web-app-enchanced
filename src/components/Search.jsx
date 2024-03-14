import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import searchIcon from '../assets/icon-search.svg';
import MainContent from './MainContent';

const Form = styled.form`
  display: flex;
  gap: 1.5rem;
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
  flex-grow: 1;
  height: 2rem;
  background: none;
  color: ${({ theme }) => theme.colors.text};
`;

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

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
        <Input name='query' />
      </Form>
    </>
  );
}
