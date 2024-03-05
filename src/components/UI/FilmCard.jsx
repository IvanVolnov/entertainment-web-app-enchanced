import styled from 'styled-components';

import bookmarkEmpty from '../../assets/icon-bookmark-empty.svg';
import bookmarkFull from '../../assets/icon-bookmark-full.svg';
import tvSvg from '../../assets/icon-category-tv.svg';
import movieSvg from '../../assets/icon-category-movie.svg';

const Card = styled.li`
  width: ${(props) => (props.$mode === 'standard' ? '17.5rem' : '29.38rem')};
  height: ${(props) => (props.$mode === 'standard' ? '14.13rem' : '14.38rem')};
  display: grid;
  grid-template:
    'a b'
    'c d';
  grid-template-columns: 1fr 3.5rem;
  grid-template-rows: ${(props) =>
    props.$mode === 'standard' ? '1fr 3.25rem' : '1fr 6.25rem'};
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

const Info = styled.div`
  width: fit-content;
  height: fit-content;
  margin: ${(props) =>
    props.$mode === 'standard' ? '0rem' : '0rem 0rem 0rem 1rem'};
  padding: ${(props) => (props.$mode === 'standard' ? '0rem' : '0.5rem')};
  grid-area: 2/1/3/3;
  align-self: ${(props) => (props.$mode === 'standard' ? 'end' : 'center')};
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.$mode === 'standard'
      ? 'unset'
      : ({ theme }) => theme.colors.backdrop};
  border-radius: 10px;

  h2 {
    font-weight: 300;
    font-size: ${(props) =>
      props.$mode === 'standard' ? '1.12rem;' : '1.88rem'};
  }
`;

const Cover = styled.div`
  grid-area: ${(props) => (props.$mode === 'standard' ? '1/1/2/3' : '1/1/3/3')};
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: top;
  border-radius: 10px;
`;

const Char = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-grow: 1;
  font-size: ${(props) => (props.$mode === 'standard' ? '0.81rem' : '0.94rem')};
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
  cardMode,
  name,
  backdrop,
  mediaType,
  releaseDate,
  score,
}) {
  const formattedDate = new Date(releaseDate);

  return (
    <Card $mode={cardMode}>
      <Cover
        $mode={cardMode}
        $image={`https://image.tmdb.org/t/p/w780/${backdrop}`}
      />
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
        <h2>{name}</h2>
      </Info>
      <BookmarkBtn
        $image={bookmarked ? bookmarkFull : bookmarkEmpty}
      ></BookmarkBtn>
    </Card>
  );
}
