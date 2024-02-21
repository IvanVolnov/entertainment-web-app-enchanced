import styled from 'styled-components';

import logImg from '../assets/logo.svg';
import avatarImg from '../assets/image-avatar.png';
import { Link } from 'react-router-dom';

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
`;

const Account = styled(Link)``;

export default function NavMenu() {
  return (
    <Menu>
      <Logo src={logImg} alt='logo image' />
      <NavBar>
        <div>Home</div>
        <div>Movies</div>
        <div>Series</div>
      </NavBar>
      <Account bacground={avatarImg} />
    </Menu>
  );
}
