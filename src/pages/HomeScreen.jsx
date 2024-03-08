import Trending from '../components/Trending';
import Search from '../components/UI/Search';
import MainContent from '../components/MainContent';

export default function HomeScreen() {
  return (
    <>
      <Search />
      <Trending />
      <MainContent heading='Recommended for you' mode='mixed' />
    </>
  );
}
