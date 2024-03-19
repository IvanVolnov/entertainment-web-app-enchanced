import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'react-router-dom';

import { fetchDataList } from '../http/http';
import Error from '../components/UI/Error';
import Heading from '../components/UI/Heading';
import RenderResults from './RenderResults';
import { Loading } from './UI/Loading';
import { useEffect, useState } from 'react';
import { FilmGrid } from './MainContentStyles';

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
  const [quantity, setQuantity] = useState(0);

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
    // console.log(data);
    // content = <>{data.pages.map((el) => RenderResults(data.pages.results, ref))}</>;
    content = (
      <>
        {data.pages.map((el) => (
          <RenderResults key={el.page} el={el.results} ref={ref} />
        ))}
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
