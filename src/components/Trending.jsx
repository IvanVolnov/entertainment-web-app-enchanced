import { useQuery } from '@tanstack/react-query';
import { fetchTernding } from '../http/http';
import styled from 'styled-components';
import Heading from './UI/Heading';
import FilmCard from './UI/FilmCard';

const Carousel = styled.ul`
  display: grid;
  gap: 2.5rem;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  margin-top: 0.2rem;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;

  li {
    scroll-snap-align: start;
  }
`;

export default function Trending() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['trending'],
    queryFn: fetchTernding,
  });

  let trendingContent;

  if (isPending) {
    trendingContent = <p>Loading...</p>;
  }
  if (isError) {
    trendingContent = <p>{error}</p>;
  }
  if (data) {
    trendingContent = (
      <Carousel>
        {data.map(
          ({
            id,
            name,
            backdrop_path,
            media_type,
            first_air_date,
            release_date,
            original_title,
            vote_average,
          }) => (
            <FilmCard
              key={id}
              score={vote_average}
              cardMode='trending'
              name={name || original_title}
              backdrop={backdrop_path}
              mediaType={media_type}
              releaseDate={first_air_date || release_date}
            />
          )
        )}
      </Carousel>
    );
  }

  return (
    <>
      <Heading>Trending</Heading>
      {trendingContent}
    </>
  );
}
