import bookmarkEmpty from '../../assets/icon-bookmark-empty.svg';
import bookmarkFull from '../../assets/icon-bookmark-full.svg';
import tvSvg from '../../assets/icon-category-tv.svg';
import movieSvg from '../../assets/icon-category-movie.svg';
import {
  Card,
  Cover,
  Info,
  Char,
  BookmarkBtn,
  CoverLoading,
} from './FilmCardStyles';

import { useState, useRef, useEffect } from 'react';

export default function FilmCard({
  innerRef,
  bookmarked = false,
  cardMode,
  name,
  backdrop,
  mediaType,
  releaseDate,
  score,
}) {
  const formattedDate = releaseDate ? new Date(releaseDate) : undefined;
  const [showCover, setShowCover] = useState(false);
  const coverRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowCover(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (coverRef.current) {
      observer.observe(coverRef.current);
    }

    return () => {
      if (coverRef.current) {
        observer.unobserve(coverRef.current);
      }
    };
  }, []);

  return (
    <Card $mode={cardMode} ref={innerRef}>
      {showCover ? (
        <Cover
          $mode={cardMode}
          $image={
            backdrop ? `https://image.tmdb.org/t/p/w780/${backdrop}` : undefined
          }
        />
      ) : (
        <CoverLoading $mode={cardMode} />
      )}

      <Info $mode={cardMode}>
        <Char>
          <p>{formattedDate?.getFullYear()}</p>
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
          <p>{score?.toFixed(1)}</p>
        </Char>
        <h2>{name}</h2>
      </Info>
      <BookmarkBtn
        ref={coverRef}
        $image={bookmarked ? bookmarkFull : bookmarkEmpty}
      ></BookmarkBtn>
    </Card>
  );
}
