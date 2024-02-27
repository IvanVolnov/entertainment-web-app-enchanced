import { useQuery } from '@tanstack/react-query';
import { fetchTernding } from '../http/http';
import styled from 'styled-components';
import Heading from './UI/Heading';

const Carousel = styled.ul`
  display: flex;
  gap: 2.5rem;
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
        {data.map((trend) => (
          <li key={trend.id}>{trend.title || trend.name}</li>
        ))}
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
