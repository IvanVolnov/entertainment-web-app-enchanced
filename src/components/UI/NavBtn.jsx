import styled from 'styled-components';
import homeIcon from '../../../public/assets/icon-nav-home.svg';

const IconWrapper = styled.div`
  &:hover {
    svg {
      fill: red; // Apply fill color to the SVG on hover
    }
  }
`;

const Icon = styled.img`
  // Add any additional styling for the SVG image here
`;

export default function NavBtn() {
  return (
    <IconWrapper>
      <Icon src={homeIcon} alt='Home' />
    </IconWrapper>
  );
}

//  <NavLink to={route} end>
//    <Icon />
//  </NavLink>;
