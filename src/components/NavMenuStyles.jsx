import styled from 'styled-components';
import { media } from '../styles/Global';

export const Menu = styled.header`
  margin: 2rem;
  width: 6rem;
  max-height: 60rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 20px;
  padding: 2.21rem 0rem 1.74rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.69rem;

  @media ${media.tablet} {
    border-radius: 10px;
    max-height: 4.5rem;
    width: auto;
    padding: 1.31rem 1rem 1.19rem 1.5rem;
    margin: 1.44rem 1.56rem;
    gap: 0rem;
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${media.mobile} {
    max-height: 3.5rem;
    padding: 1rem;
    margin: 0rem;
    border-radius: 0px;
  }
`;
export const Logo = styled.img`
  overflow: clip;
  width: 2.06rem;
  height: 1.69rem;

  @media ${media.mobile} {
    width: 1.56rem;
    height: 1.25rem;
  }
`;
export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 2.2rem;

  @media ${media.tablet} {
    flex-direction: row;
    flex-grow: 0;
    gap: 2rem;
  }

  @media ${media.mobile} {
    gap: 1.5rem;
  }
`;
