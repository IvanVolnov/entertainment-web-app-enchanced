import styled from 'styled-components';

import Trending from '../components/Trending';
import Search from '../components/UI/Search';

const PageWrapper = styled.main`
  max-width: calc(100% - 10.25rem);
  margin-top: 4rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
`;

export default function HomeScreen() {
  return (
    <PageWrapper>
      <Search />
      <Trending />
    </PageWrapper>
  );
}
