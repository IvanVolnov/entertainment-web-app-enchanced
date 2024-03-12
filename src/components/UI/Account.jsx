import styled from 'styled-components';
import { media } from '../../styles/Global';

import dummyAvatar from '../../assets/image-avatar.png';

const ImgWrapper = styled.a`
  width: 2.5rem;
  height: 2.5rem;

  @media ${media.tablet} {
    width: 2rem;
    height: 2rem;
  }

  @media ${media.mobile} {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const AvatarImage = styled.img`
  width: inherit;
  height: inherit;

  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 50%;
`;

export default function Account() {
  return (
    <ImgWrapper>
      <AvatarImage src={dummyAvatar} alt='avatar image' />
    </ImgWrapper>
  );
}
