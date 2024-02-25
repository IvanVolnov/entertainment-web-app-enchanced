import logImg from '../../public/assets/logo.svg';
import MoviesIcon from '../../public/assets/icon-nav-movies.svg?react';
import NavBtn from './UI/NavBtn';
import HomeIcon from '../../public/assets/icon-nav-home.svg?react';
import SeriesIcon from '../../public/assets/icon-nav-tv-series.svg?react';
import BookmarkIcon from '../../public/assets/icon-nav-bookmark.svg?react';
import Account from './UI/Account';
import { Menu, Logo, NavBar } from './NavMenuStyles';

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
