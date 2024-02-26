import logImg from '../assets/logo.svg';
import MoviesIcon from '../assets/icon-nav-movies.svg?react';
import NavBtn from './UI/NavBtn';
import HomeIcon from '../assets/icon-nav-home.svg?react';
import SeriesIcon from '../assets/icon-nav-tv-series.svg?react';
import BookmarkIcon from '../assets/icon-nav-bookmark.svg?react';
import Account from './UI/Account';
import { Menu, Logo, NavBar } from './NavMenuStyles';
import Switch from './UI/Switch';

export default function NavMenu() {
  return (
    <Menu>
      <Logo src={logImg} alt='logo image' />
      <NavBar>
        <NavBtn route='/' icon={<HomeIcon />} aria-label='home_icon' />
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
