import bookmarkEmpty from '/icon-bookmark-empty.svg';
import bookmarkFull from '/icon-bookmark-full.svg';
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

import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../../store/store';

export default function FilmCard({
  innerRef,
  cardMode,
  name,
  backdrop,
  mediaType,
  releaseDate,
  score,
  id,
}) {
  const formattedDate = releaseDate ? new Date(releaseDate) : undefined;
  const [showCover, setShowCover] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const coverRef = useRef(null);
  const dispatch = useDispatch();
  const bookmarkedMovies = useSelector((state) => state.movie);
  const bookmarkedTV = useSelector((state) => state.tv);

  const filmData = {
    name,
    backdrop_path: backdrop,
    type: mediaType,
    first_air_date: releaseDate,
    score,
    id,
  };

  const toggleBookmarked = useCallback(
    (data) => {
      const searchedStore =
        data.type === 'tv' ? bookmarkedTV : bookmarkedMovies;
      const result = searchedStore.filter((el) => el.id === data.id);
      if (result.length > 0) {
        setBookmarked(true);
      }
      if (result.length === 0) {
        setBookmarked(false);
      }
    },
    [bookmarkedMovies, bookmarkedTV]
  );

  function bookmarkBtnHandler() {
    if (!bookmarked) {
      dispatch(addBookmark(filmData));
    }
    if (bookmarked) {
      dispatch(removeBookmark(filmData));
    }
    toggleBookmarked(filmData);
  }

  useEffect(() => {
    toggleBookmarked(filmData);

    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0,
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
  }, [filmData, dispatch, toggleBookmarked]);

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

      <Info $mode={cardMode} ref={coverRef}>
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
        $image={bookmarked ? bookmarkFull : bookmarkEmpty}
        onClick={bookmarkBtnHandler}
      ></BookmarkBtn>
    </Card>
  );
}
