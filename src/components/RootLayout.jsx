import { Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, media } from '../styles/Global';
import NavMenu from './NavMenu';

const theme = {
  colors: {
    background: '#10141E',
    backgroundLight: '#161D2F',
    text: '#FFFFFF',
    highlight: '#FC4747',
    secondary: '#5A698F',
  },
};

const Wrapper = styled.div`
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: stretch;

  @media ${media.tablet} {
    flex-direction: column;
  }
`;

export default function RootLayout() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavMenu />
        <Outlet />
      </ThemeProvider>
    </Wrapper>
  );
}
