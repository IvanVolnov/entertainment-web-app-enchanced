import Search from '../components/UI/Search';
import MainContent from '../components/MainContent';

export default function SeriesScreen() {
  return (
    <>
      <Search />
      <MainContent heading='TV Series' mode='tv' />
    </>
  );
}
