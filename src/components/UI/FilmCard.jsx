import styled from 'styled-components';

import bookmarkEmpty from '../../assets/icon-bookmark-empty.svg';
import bookmarkFull from '../../assets/icon-bookmark-full.svg';
import tvSvg from '../../assets/icon-category-tv.svg';
import movieSvg from '../../assets/icon-category-movie.svg';

const Card = styled.li`
  /* FIX This */
  width: ${(props) => (props.$mode === 'standard' ? '19.38rem' : '29.38rem')};
  height: 14.38rem;

  display: grid;
  grid-template:
    'a b'
    'c d';
  grid-template-columns: 1fr 3.5rem;
  grid-template-rows: 1fr 6.25rem;
`;

const BookmarkBtn = styled.a`
  width: 2rem;
  height: 2rem;
  margin-top: 1rem;
  grid-area: b;
  background-color: ${({ theme }) => theme.colors.backdrop};
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  transition: filter 0.5s ease;

  &:hover {
    filter: invert(1);
  }
`;

const Name = styled.h2`
  font-weight: 300;
`;

const Info = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: 1rem;
  padding: 0.5rem;
  grid-column: 1/3;
  grid-row: 2/3;
  align-self: center;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backdrop};
  border-radius: 10px;
`;

const Cover = styled.div`
  grid-area: 1/1/3/3;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  border-radius: 10px;
`;

const Char = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-grow: 1;
  font-size: 0.94rem;
  font-weight: 200;

  img {
    margin-right: 0.2rem;
  }

  > p:nth-child(n + 2)::before,
  > span:nth-child(n + 2)::before {
    content: '·';
    padding-right: 0.5em;
  }
`;

export default function FilmCard({
  bookmarked = false,
  cardMode = 'standard',
  name,
  backdrop,
  mediaType,
  releaseDate,
  score,
}) {
  const formattedDate = new Date(releaseDate);

  return (
    <Card $mode={cardMode}>
      <Cover $image={`https://image.tmdb.org/t/p/w780/${backdrop}`} />
      <Info $mode={cardMode}>
        <Char>
          <p>{formattedDate.getFullYear()}</p>
          {mediaType === 'movie' ? (
            <p>
              <img src={movieSvg} />
              <span>Movie</span>
            </p>
          ) : (
            <p>
              <img src={tvSvg} /> <span>TV Series</span>
            </p>
          )}
          <p>{score.toFixed(1)}</p>
        </Char>
        <Name>{name}</Name>
      </Info>
      <BookmarkBtn
        $image={bookmarked ? bookmarkFull : bookmarkEmpty}
      ></BookmarkBtn>
    </Card>
  );
}
