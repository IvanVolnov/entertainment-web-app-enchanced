import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import { fetchDataList } from '../http/http';
import Error from '../components/UI/Error';
import Heading from '../components/UI/Heading';
import FilmCard from '../components/UI/FilmCard';
import { Loading } from './UI/Loading';
import { useEffect } from 'react';

const FilmGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10.25rem, 17.5rem));
  gap: 2.5rem;
  button {
    opacity: 1;
  }
`;

export default function MainContent({ heading, mode }) {
  const { ref, inView } = useInView();
  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['movies', { type: mode }],
    queryFn: fetchDataList,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1 != 500 ? lastPage.page + 1 : undefined;
      return nextPage;
    },
  });

  let content;

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log('fire');
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  if (status === 'pending') {
    content = <Loading />;
  }
  if (status === 'error') {
    content = <Error error={error} backdrop='failed to fetch data' />;
  }

  if (data) {
    // console.log(data, 'data sent to compontent');
    content = (
      <>
        {data.pages.map((el) =>
          el.results.map(
            (
              {
                id,
                name,
                backdrop_path,
                first_air_date,
                release_date,
                original_title,
                vote_average,
              },
              index
            ) => (
              <FilmCard
                innerRef={el.results.length === index + 1 ? ref : undefined}
                key={id}
                score={vote_average}
                cardMode='standard'
                name={name || original_title}
                backdrop={backdrop_path}
                mediaType={name ? 'tv' : 'movie'}
                releaseDate={first_air_date || release_date}
              />
            )
          )
        )}
      </>
    );
  }
  return (
    <>
      <Heading>{heading}</Heading>
      <FilmGrid>
        {content}
        {isFetchingNextPage && <Loading />}
      </FilmGrid>
      {/* <button ref={ref} onClick={() => fetchNextPage()}>
        load more
      </button> */}
    </>
  );
}
