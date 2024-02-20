import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}
a:visited {
  color: inherit;
}
ul {
  list-style: none;
}
body {
    min-height: 100vh;
    min-height: 100svh;
    background-color: ${({ theme }) => theme.colors.background};
}

`;

export default GlobalStyles;
