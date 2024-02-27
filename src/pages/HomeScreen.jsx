import styled from 'styled-components';
import Trending from '../components/Trending';

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

export default function HomeScreen() {
  return (
    <PageWrapper>
      <h1>HomeScreen</h1>
      <Trending />
    </PageWrapper>
  );
}
