import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'react-router-dom';

import { fetchDataList } from '../http/http';
import Error from '../components/UI/Error';
import Heading from '../components/UI/Heading';
import FilmCard from '../components/UI/FilmCard';
import { Loading } from './UI/Loading';
import { useEffect, useState } from 'react';
import { FilmGrid } from './MainContentStyles';
import { useSelector } from 'react-redux';

export default function MainContent({
  heading,
  mode,
  searchTerm = undefined,
  fromSaved = false,
}) {
  const { ref, inView } = useInView();
  const [searchParams] = useSearchParams();
  searchTerm = searchParams.get('query');
  let content;
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

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['movies', { type: mode, searchTerm: searchTerm }],
    queryFn: fetchDataList,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      let nextPage = lastPage.page + 1 != 500 ? lastPage.page + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (
      !fromSaved &&
      inView &&
      hasNextPage &&
      data.pageParams.length <= data.pages[0].total_pages
    ) {
      fetchNextPage();
    }
    if (data && searchTerm) {
      setQuantity(data.pages[0].total_results);
    }
  }, [inView, hasNextPage, fetchNextPage, data, searchTerm, fromSaved]);

  if (status === 'pending') {
    content = <Loading />;
  }
  if (status === 'error') {
    content = <Error error={error} backdrop='failed to fetch data' />;
  }

  if (data) {
    // console.log(data, data.pages[0].total_pages);
    content = <>{data.pages.map((el) => renderResults(el.results))}</>;
  }

  if (fromSaved) {
    content = (
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
        {isFetchingNextPage && <Loading />}
      </FilmGrid>
    </>
  );
}
