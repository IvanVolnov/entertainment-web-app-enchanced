import { useQuery } from '@tanstack/react-query';
import { fetchTernding } from '../http/http';

export default function HomeScreen() {
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
      <ul>
        {data.map((trend) => (
          <li key={trend.id}>{trend.title || trend.name}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <h1>HomeScreen</h1>;{trendingContent}
    </>
  );
}
