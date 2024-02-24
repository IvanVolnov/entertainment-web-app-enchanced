import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const IconWrapper = styled(NavLink)`
  svg {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
  }

  &.active {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.text};
      }
    }
  }

  svg:hover {
    path {
      fill: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export default function NavBtn({ route, icon }) {
  return (
    <IconWrapper
      to={route}
      className={({ isActive }) => (isActive ? '.active' : undefined)}
      end
    >
      {icon}
    </IconWrapper>
  );
}
