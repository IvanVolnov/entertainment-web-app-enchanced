import Trending from '../components/Trending';
import Search from '../components/Search';
import MainContent from '../components/MainContent';
import { useSearchParams } from 'react-router-dom';

export default function HomeScreen() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <>
      <Search />
      {query ? (
        <>
          <Trending />
          <MainContent heading='Recommended for you' mode='multi' />
        </>
      ) : (
        <MainContent
          heading={`Found results for '${query}'`}
          mode='multi'
          searchTerm={query}
        />
      )}
    </>
  );
}
