import { createGlobalStyle } from 'styled-components';

export const media = {
  mobile: `(max-width: 540px)`,
  tablet: `(max-width: 1100px)`,
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
  letter-spacing: -0.06rem;
  font-optical-sizing: auto;
  color: ${({ theme }) => theme.colors.text};
  font-style: normal;
  min-height: 100vh;
  min-height: 100svh;
  background-color: ${({ theme }) => theme.colors.background};
  
}

input {
  font-family: inherit;
  font-optical-sizing: inherit;
  font-style: inherit;
 
}
`;
