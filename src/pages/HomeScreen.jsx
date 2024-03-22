import Trending from '../components/Trending';
import Search from '../components/Search';
import MainContent from '../components/MainContent';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const SearchAndTrendingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.19rem;
`;

export default function HomeScreen() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ? true : false;
  const mode = 'multi';

  return (
    <>
      <SearchAndTrendingWrapper>
        <Search mode={mode} />
        {query || <Trending />}
      </SearchAndTrendingWrapper>
      <MainContent heading='Recommended for you' mode={mode} />
    </>
  );
}
