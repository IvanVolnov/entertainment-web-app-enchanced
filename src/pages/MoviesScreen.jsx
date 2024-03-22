import Search from '../components/Search';

import MainContent from '../components/MainContent';

export default function MoviesScreen() {
  const mode = 'movie';
  return (
    <>
      <Search mode={mode} />
      <MainContent heading='Movies' mode={mode} />
    </>
  );
}
