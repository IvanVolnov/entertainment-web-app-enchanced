import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { fetchDataList } from '../http/http';
import Error from '../components/UI/Error';
import Search from '../components/UI/Search';
import Heading from '../components/UI/Heading';
import FilmCard from '../components/UI/FilmCard';
import styled from 'styled-components';

const FilmGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10.25rem, 17.5rem));
  gap: 2.5rem;
`;

export default function MainContent({ heading, mode }) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchDataList,
  });

  let content;

  if (isPending) {
    content = <p>Loading...</p>;
  }
  if (isError) {
    content = <Error error={error} backdrop='failed to fetch trending data' />;
  }

  if (data) {
    content = (
      <FilmGrid>
        {data.map(
          ({
            id,
            name,
            backdrop_path,
            first_air_date,
            release_date,
            original_title,
            vote_average,
          }) => (
            <FilmCard
              key={id}
              score={vote_average}
              cardMode='standard'
              name={name || original_title}
              backdrop={backdrop_path}
              mediaType={'movie'}
              releaseDate={first_air_date || release_date}
            />
          )
        )}
      </FilmGrid>
    );
  }
  return (
    <>
      <Heading>{heading}</Heading>
      {content}
    </>
  );
}
