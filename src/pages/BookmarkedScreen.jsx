import Search from '../components/Search';
import BookmarkedContent from '../components/BookmarkedContent';
import { useSearchParams } from 'react-router-dom';

export default function BookmarkedScreen() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ? true : false;
  return (
    <>
      <Search />
      <BookmarkedContent heading='Bookmarked Movies' mode='movie' />
      {query || <BookmarkedContent heading='Bookmarked TV Series' mode='tv' />}
    </>
  );
}
