import bookmarkEmpty from '../../assets/icon-bookmark-empty.svg';
import bookmarkFull from '../../assets/icon-bookmark-full.svg';
import tvSvg from '../../assets/icon-category-tv.svg';
import movieSvg from '../../assets/icon-category-movie.svg';
import { Card, Cover, Info, Char, BookmarkBtn } from './FilmCardStyles';

export default function FilmCard({
  bookmarked = false,
  cardMode,
  name,
  backdrop,
  mediaType,
  releaseDate,
  score,
}) {
  const formattedDate = new Date(releaseDate);

  return (
    <Card $mode={cardMode}>
      <Cover
        $mode={cardMode}
        $image={`https://image.tmdb.org/t/p/w780/${backdrop}`}
      />
      <Info $mode={cardMode}>
        <Char>
          <p>{formattedDate.getFullYear()}</p>
          {mediaType === 'movie' ? (
            <p>
              <img src={movieSvg} />
              <span>Movie</span>
            </p>
          ) : (
            <p>
              <img src={tvSvg} /> <span>TV Series</span>
            </p>
          )}
          <p>{score.toFixed(1)}</p>
        </Char>
        <h2>{name}</h2>
      </Info>
      <BookmarkBtn
        $image={bookmarked ? bookmarkFull : bookmarkEmpty}
      ></BookmarkBtn>
    </Card>
  );
}
