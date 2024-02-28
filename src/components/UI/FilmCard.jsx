import styled from 'styled-components';

import bookmarkEmpty from '../../assets/icon-bookmark-empty.svg';

const Card = styled.li`
  width: 29.38rem;
  height: 14.38rem;
  display: grid;
  grid-template:
    'a b'
    'c d';
  a {
    grid-area: b;
    background-color: ${({ theme }) => theme.colors.backdrop};
    background-blend-mode: darken;
    border-radius: 50%;
  }
`;

const Name = styled.h2``;

const Info = styled.div`
  grid-area: c;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backdrop};

  div {
    display: flex;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};

    :nth-child(n + 2)::before {
      content: '·';
      padding-right: 0.5em;
    }
  }
`;

const Cover = styled.div`
  grid-area: 1/1/3/3;
  background-image: url(${(props) => props.$image});
  background-size: cover;
`;

export default function FilmCard({
  cardMode,
  name,
  backdrop,
  mediaType,
  releaseDate,
  score,
}) {
  const formattedDate = new Date(releaseDate);

  return (
    <Card>
      <Cover $image={`https://image.tmdb.org/t/p/w780/${backdrop}`} />
      <Info>
        <div>
          <p>{formattedDate.getFullYear()}</p>
          <p>{mediaType === 'movie' ? 'Movie' : 'TV Series'} </p>
          <p>{score.toFixed(1)}</p>
        </div>
        <Name>{name}</Name>
      </Info>
      <a>
        <img src={bookmarkEmpty} alt='unchecked bookmark' />
      </a>
    </Card>
  );
}
