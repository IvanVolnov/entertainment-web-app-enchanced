import Search from '../components/UI/Search';

import MainContent from '../components/MainContent';

export default function MoviesScreen() {
  return (
    <>
      <Search />
      <MainContent heading='Movies' mode='movie' />
    </>
  );
}
