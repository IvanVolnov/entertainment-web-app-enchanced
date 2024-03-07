import styled from 'styled-components';

const StyledError = styled.div`
  height: clamp(3rem, 100%, 20rem);
  width: clamp(3rem, 100%, 30rem);
  background-color: ${({ theme }) => theme.colors.highlight};
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export default function Error({ error, backdrop = 'something went wrong' }) {
  return (
    <StyledError>
      <p>there is an error</p>
      <p>{error.code ? `code: ${error.code}` : ''}</p>
      <p>{error.info?.status_message || backdrop}</p>
    </StyledError>
  );
}
