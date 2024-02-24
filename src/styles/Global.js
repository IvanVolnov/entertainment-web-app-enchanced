import { createGlobalStyle } from 'styled-components';

export const media = {
  mobile: `(max-width: 375px)`,
  tablet: `(max-width: 768px)`,
  laptop: `(max-width: 1024px)`,
};

export const GlobalStyles = createGlobalStyle`

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
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  color: ${({ theme }) => theme.colors.text};
  font-style: normal;
  min-height: 100vh;
  min-height: 100svh;
  background-color: ${({ theme }) => theme.colors.background};
}


`;
