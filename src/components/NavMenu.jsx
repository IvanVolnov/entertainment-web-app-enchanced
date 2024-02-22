import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logImg from '../../public/assets/logo.svg';
import moviesIvon from '../../public/assets/icon-nav-movies.svg';
import homeIcon from '../../public/assets/icon-nav-home.svg';
import avatarImg from '../../public/assets/image-avatar.png';
import NavBtn from './UI/NavBtn';

const Menu = styled.header`
  margin: 2rem;
  width: 6rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 20px;
  padding: 2.21rem 0rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  overflow: clip;
  width: 2.06rem;
  height: 1.69rem;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Account = styled(Link)``;

export default function NavMenu() {
  return (
    <Menu>
      <Logo src={logImg} alt='logo image' />
      <NavBar>
        <NavBtn route='/' img={homeIcon} alt='home icon' />
        <NavBtn route='/movies' img={moviesIvon} alt='movies icon' />
        <div>Series</div>
      </NavBar>
      <Account bacground={avatarImg} />
    </Menu>
  );
}
