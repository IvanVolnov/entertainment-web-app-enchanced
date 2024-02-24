import styled from 'styled-components';

import logImg from '../../public/assets/logo.svg';
import MoviesIcon from '../../public/assets/icon-nav-movies.svg?react';
import NavBtn from './UI/NavBtn';
import HomeIcon from '../../public/assets/icon-nav-home.svg?react';
import SeriesIcon from '../../public/assets/icon-nav-tv-series.svg?react';
import BookmarkIcon from '../../public/assets/icon-nav-bookmark.svg?react';
import Account from './UI/Account';
import { media } from '../styles/Global';

const Menu = styled.header`
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
    margin: 1.56rem 1.44rem;
    gap: none;
    width: 100vw;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  overflow: clip;
  width: 2.06rem;
  height: 1.69rem;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 2.2rem;

  @media ${media.tablet} {
    flex-direction: row;
    flex-grow: 0;
  }
`;

export default function NavMenu() {
  return (
    <Menu>
      <Logo src={logImg} alt='logo image' />
      <NavBar>
        <NavBtn route='/' icon={<HomeIcon />} aria-label='home icon' />
        <NavBtn
          route='/movies'
          icon={<MoviesIcon />}
          aria-label='movies_icon'
        />
        <NavBtn
          route='/series'
          icon={<SeriesIcon />}
          aria-label='series_icon'
        />
        <NavBtn
          route='/bookmarked'
          icon={<BookmarkIcon />}
          aria-label='bookmark_icon'
        />
      </NavBar>
      <Account />
    </Menu>
  );
}
