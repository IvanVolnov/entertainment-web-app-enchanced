import styled from 'styled-components';
import noImgSvg from '/no-image.svg';
import { Loading } from './Loading';
import { media } from '../../styles/Global';

export const Card = styled.div`
  width: ${(props) => (props.$mode === 'standard' ? '17.5rem' : '29.38rem')};
  height: ${(props) => (props.$mode === 'standard' ? '14.13rem' : '14.38rem')};
  display: grid;
  grid-template:
    'a b'
    'c d';
  grid-template-columns: ${(props) =>
    props.$mode === 'standard' ? '1fr 3rem' : '1fr 3.5rem'};
  grid-template-rows: ${(props) =>
    props.$mode === 'standard'
      ? '1fr minmax(3.25rem, max-content)'
      : '1fr minmax(6.25rem, max-content)'};

  @media ${media.tablet} {
    width: ${(props) => (props.$mode === 'standard' ? '13.75rem' : '29.38rem')};
    height: ${(props) => (props.$mode === 'standard' ? '12rem' : '14.38rem')};
  }

  @media ${media.mobile} {
    width: ${(props) => (props.$mode === 'standard' ? '10.25rem' : '15rem')};
    height: ${(props) => (props.$mode === 'standard' ? '9.63rem' : '8.75rem')};
    grid-template-columns: ${(props) =>
      props.$mode === 'standard' ? '1fr 2.5rem' : '1fr 2.5rem'};
    grid-template-rows: ${(props) =>
      props.$mode === 'standard'
        ? '1fr minmax(2.7rem, max-content)'
        : '1fr minmax(4.2rem, max-content)'};
  }
`;
export const BookmarkBtn = styled.button`
  cursor: pointer;
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
  border: none;

  &:hover,
  &:focus {
    filter: invert(1);
  }

  @media ${media.mobile} {
    margin-top: 0.5rem;
  }
`;
export const Info = styled.div`
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

  @media ${media.tablet} {
    h2 {
      font-weight: 300;
      font-size: ${(props) =>
        props.$mode === 'standard' ? '1.12rem;' : '1.5rem'};
    }
  }

  @media ${media.mobile} {
    margin: ${(props) =>
      props.$mode === 'standard' ? '0rem' : '0rem 0rem 0rem 0.5rem'};
    h2 {
      font-size: ${(props) =>
        props.$mode === 'standard' ? '0.88rem;' : '0.94rem'};
    }
  }
`;
export const Cover = styled.div`
  grid-area: ${(props) => (props.$mode === 'standard' ? '1/1/2/3' : '1/1/3/3')};
  background-image: url(${(props) => (props.$image ? props.$image : noImgSvg)});
  background-size: ${(props) => (props.$image ? 'cover' : 'contain')};
  background-repeat: ${(props) => (props.$image ? 'repeat' : 'no-repeat')};
  background-position: top;
  border-radius: 10px;
`;
export const Char = styled.div`
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

  @media ${media.mobile} {
    font-size: ${(props) =>
      props.$mode === 'standard' ? '0.69rem;' : '0.75rem'};
  }
`;

export const CoverLoading = styled(Loading)`
  grid-area: ${(props) => (props.$mode === 'standard' ? '1/1/2/3' : '1/1/3/3')};
`;
