import { forwardRef } from 'react';
import FilmCard from './UI/FilmCard';

const RenderResults = forwardRef(function RenderResults(
  { el, fromSaved },
  ref
) {
  return (
    <>
      {el.map(
        (
          {
            id,
            name,
            backdrop_path,
            first_air_date,
            release_date,
            original_title,
            vote_average,
            type,
            score,
          },
          index
        ) => (
          <FilmCard
            innerRef={el.length === index + 1 ? ref : undefined}
            key={id}
            id={id}
            score={score || vote_average}
            cardMode='standard'
            name={name || original_title}
            backdrop={backdrop_path}
            mediaType={type || (!type && name ? 'tv' : 'movie')}
            releaseDate={first_air_date || release_date}
            fromSaved={fromSaved}
          />
        )
      )}
    </>
  );
});

export default RenderResults;
