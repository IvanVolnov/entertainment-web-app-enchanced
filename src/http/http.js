export async function fetchTernding() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWJkZTM0YTFiMTUxN2Q4MmI1NmNkNTRhYjQ4MzE5YSIsInN1YiI6IjY1ZDIzMzE3NDFlZWUxMDE3YzBhMDZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QamWrj0r0wIujQVEuy1yJpHirM6H2uE2x4oUucyUg1Q',
    },
  };
  let url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';

  const response = await fetch(url, options);

  if (!response.ok) {
    const error = new Error(
      'An error occurred while fetching the the trending data'
    );
    error.code = response.status;
    error.info = await response.json();

    throw error;
  }
  const { results } = await response.json();
  const filteredRes = results
    .sort((a, b) => {
      return b.popularity - a.popularity;
    })
    .slice(0, 10);
  return filteredRes;
}

export async function fetchDataList({ queryKey, pageParam }) {
  // console.log(queryKey);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWJkZTM0YTFiMTUxN2Q4MmI1NmNkNTRhYjQ4MzE5YSIsInN1YiI6IjY1ZDIzMzE3NDFlZWUxMDE3YzBhMDZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QamWrj0r0wIujQVEuy1yJpHirM6H2uE2x4oUucyUg1Q',
    },
  };
  let url;
  const type = queryKey[1].type;
  const query = queryKey[1].searchTerm;

  url = `https://api.themoviedb.org/3/${type}/popular?language=en-US&page=${pageParam}`;

  if (query) {
    url = `https://api.themoviedb.org/3/search/${type}?query=${query}&include_adult=false&language=en-US&page=${pageParam}`;
  }

  if (type === 'multi' && !query) {
    url = `https://api.themoviedb.org/3/trending/all/week?language=en-US&page=${pageParam}`;
  }
  // console.log(type);
  // console.log(url);
  const response = await fetch(url, options);

  if (!response.ok) {
    const error = new Error('An error occurred while fetching data');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const result = await response.json();
  console.log(result);

  if (query) {
    let filteredResult = result;
    filteredResult.results = filteredResult.results
      .filter((el) => el.media_type !== 'person')
      .sort((a, b) => {
        return b.popularity - a.popularity;
      });
    // console.log(filteredResult);
    return filteredResult;
  }

  return result;
}
