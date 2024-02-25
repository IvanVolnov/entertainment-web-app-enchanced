import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { media } from '../../styles/Global';

const IconWrapper = styled(NavLink)`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  align-content: center;
  svg {
    width: 100%;
    height: 100%;
  }

  &.active {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.text};
      }
    }
  }

  @media (hover: hover) {
    svg:hover {
      path {
        fill: ${({ theme }) => theme.colors.highlight};
      }
    }
  }

  @media (hover: none) {
    svg:active {
      path {
        fill: ${({ theme }) => theme.colors.highlight};
      }
    }
  }

  @media ${media.mobile} {
    width: 1rem;
    height: 1rem;
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
