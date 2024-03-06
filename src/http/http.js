import { json } from 'react-router-dom';

export async function fetchTernding({ signal, searchTerm }) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWJkZTM0YTFiMTUxN2Q4MmI1NmNkNTRhYjQ4MzE5YSIsInN1YiI6IjY1ZDIzMzE3NDFlZWUxMDE3YzBhMDZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QamWrj0r0wIujQVEuy1yJpHirM6H2uE2x4oUucyUg1Q',
    },
    // signal: signal,
  };
  let url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';

  if (searchTerm) {
    url += '?search=' + searchTerm;
  } // добавляем парамет searchTerm для того чтобы передать данные для поиска на бэк

  const response = await fetch(url, options);

  if (!response.ok) {
    return json({ message: 'could not fetch events' }, { status: 500 });
  }
  const { results } = await response.json();
  const filteredRes = results
    .sort((a, b) => {
      return b.popularity - a.popularity;
    })
    .slice(0, 10);
  console.log(filteredRes);
  return filteredRes;
}
