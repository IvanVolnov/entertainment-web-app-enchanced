import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { fetchDataList } from '../http/http';
import Error from '../components/UI/Error';
import Search from '../components/UI/Search';
import Heading from '../components/UI/Heading';
import FilmCard from '../components/UI/FilmCard';

export default function MoviesScreen() {
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
      <div>
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
      </div>
    );
  }
  return (
    <>
      <Search />
      <Heading>Movies</Heading>
      {content}
    </>
  );
}
