import Search from '../components/Search';
import MainContent from '../components/MainContent';

export default function BookmarkedScreen() {
  return (
    <>
      <Search />
      <MainContent heading='Bookmarked Movies' mode='movie' fromSaved={true} />
      <MainContent heading='Bookmarked TV Series' mode='tv' fromSaved={true} />
    </>
  );
}
