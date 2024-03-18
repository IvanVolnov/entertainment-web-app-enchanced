
import { useSearchParams } from 'react-router-dom';
import FilmCard from '../components/UI/FilmCard';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function MainContent({
  heading,
  mode,
  searchTerm = undefined,
  fromSaved = false,
}) {
  const [searchParams] = useSearchParams();
  searchTerm = searchParams.get('query');
  const state = useSelector((state) => state);
  const [quantity, setQuantity] = useState(0);

  const renderResults = (el) =>
    el.map(
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
        },
        index
      ) => (
        <FilmCard
          innerRef={el.length === index + 1 ? ref : undefined}
          key={id}
          id={id}
          score={vote_average}
          cardMode='standard'
          name={name || original_title}
          backdrop={backdrop_path}
          mediaType={!type && name ? 'tv' : 'movie'}
          releaseDate={first_air_date || release_date}
          fromSaved={fromSaved}
        />
      )
    );

  

  useEffect(() => {
    }
    if (searchTerm) {
      setQuantity(data.pages[0].total_results);
    }
  }, [ data, searchTerm]);

  
   let content = (
      <>
        {state[mode].length === 0
          ? 'there is no bookmarked movies yet'
          : renderResults(state[mode])}
      </>
    );
  }

  return (
    <>
      <Heading>
        {searchTerm ? `Found ${quantity} results for ‘${searchTerm}’` : heading}
      </Heading>
      <FilmGrid>
        {content}
      </FilmGrid>
    </>
  );
}
