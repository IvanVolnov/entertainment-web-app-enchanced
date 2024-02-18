import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
`;

export default function RootLayout() {
  return (
    <>
      <NavBar>
        <div>Home</div>
        <div>Movies</div>
        <div>Series</div>
      </NavBar>
      <Outlet />
    </>
  );
}
