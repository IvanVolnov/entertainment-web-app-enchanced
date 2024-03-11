import styled from 'styled-components';

export const Loading = styled.div`
  align-self: center;
  justify-self: center;
  width: 3.125rem;
  padding: 0.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.highlight};
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;

  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }
`;
