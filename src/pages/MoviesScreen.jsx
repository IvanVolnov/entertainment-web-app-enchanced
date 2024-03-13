import Search from '../components/Search';

import MainContent from '../components/MainContent';

export default function MoviesScreen() {
  return (
    <>
      <Search />
      <MainContent heading='Movies' mode='movie' />
    </>
  );
}
