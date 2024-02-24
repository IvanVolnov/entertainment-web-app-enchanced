import styled from 'styled-components';
import { Link } from 'react-router-dom';

import dummyAvatar from '../../../public/assets/image-avatar.png';

const AvatarImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 50%;
`;

export default function Account() {
  return (
    <Link to='/login'>
      <AvatarImage src={dummyAvatar} alt='avatar image' />
    </Link>
  );
}
