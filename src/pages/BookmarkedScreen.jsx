import Search from '../components/Search';
import BookmarkedContent from '../components/BookmarkedContent';

export default function BookmarkedScreen() {
  return (
    <>
      <Search />
      <BookmarkedContent
        heading='Bookmarked Movies'
        mode='movie'
        fromSaved={true}
      />
      <BookmarkedContent
        heading='Bookmarked TV Series'
        mode='tv'
        fromSaved={true}
      />
    </>
  );
}
