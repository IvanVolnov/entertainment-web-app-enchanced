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
    backdrop: '#00000084',
  },
};

const Wrapper = styled.div`
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  gap: 2.25rem;

  @media ${media.tablet} {
    flex-direction: column;
    justify-items: stretch;
    gap: 2.06rem;
  }

  @media ${media.mobile} {
    gap: 1.5rem;
  }
`;

const PageWrapper = styled.main`
  max-width: calc(100% - 10.25rem);
  margin-top: 4rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
`;

export default function RootLayout() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavMenu />
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </ThemeProvider>
    </Wrapper>
  );
}
