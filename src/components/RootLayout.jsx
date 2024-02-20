import { Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import logImg from '../assets/logo.svg';
import GlobalStyles from './styles/Global';

const theme = {
  colors: {
    background: '#10141E',
    backgroundLight: '#161D2F',
    text: '#FFFFFF',
    highlight: '#FC4747',
    secondary: '#5A698F',
  },
};

const Menu = styled.header`
  display: flex;
  flex-direction: column;
  height: 100swh;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 100px;
  height: 200px;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Account = styled.div``;

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Menu>
        <Logo src={logImg} />
        <NavBar>
          <div>Home</div>
          <div>Movies</div>
          <div>Series</div>
        </NavBar>
        <Account />
      </Menu>
      <Outlet />
    </ThemeProvider>
  );
}
