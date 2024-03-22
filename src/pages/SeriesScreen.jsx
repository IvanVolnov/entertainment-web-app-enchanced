import Search from '../components/Search';
import MainContent from '../components/MainContent';

export default function SeriesScreen() {
  const mode = 'tv';
  return (
    <>
      <Search mode={mode} />
      <MainContent heading='TV Series' mode={mode} />
    </>
  );
}
