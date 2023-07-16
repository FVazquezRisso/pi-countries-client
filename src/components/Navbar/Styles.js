import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { color1, color2 } from '../../components/Pagination/Styles'

const boxAnimation = keyframes`
  0% {
    box-shadow: 0 0 1.96px #fff, 0 0 3.92px #fff, 0 0 7.84px #fff,
      0 0 8.4px ${color1},
      0 0 11.2px ${color1},
      0 0 14px ${color1},
      0 0 16.8px ${color1};
  }
  50% {
    box-shadow: 0 0 1.96px #fff, 0 0 3.92px #fff, 0 0 7.84px #fff,
      0 0 8.4px ${color2},
      0 0 11.2px ${color2},
      0 0 14px ${color2},
      0 0 16.8px ${color2};
  }
  100% {
    box-shadow: 0 0 1.96px #fff, 0 0 3.92px #fff, 0 0 7.84px #fff,
      0 0 8.4px ${color1},
      0 0 11.2px ${color1},
      0 0 14px ${color1},
      0 0 16.8px ${color1};
  }
`;


const textAnimation = keyframes`
  0% {
    color: ${color1};
    border-color: ${color1};
  }

  50% {
    color: ${color2};
    border-color: ${color2};
  }

  100% {
    color: ${color1};
    border-color: ${color1};
  }

`;


export const NavContainer = styled.nav`
  height: 1.5rem;
  margin: 1rem 1rem 0 1rem; 
  padding: 1rem;
  border-bottom: 2px solid transparent;
  border-radius: 15px;
  animation: ${boxAnimation} 5s ease-in-out infinite;
`;

export const NavButton = styled(NavLink)`
  margin: 0 1rem;
  padding: 0.2rem;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  color: white;
  animation: ${textAnimation} 5s ease-in-out infinite;
  transition-property: border;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;

  &:hover {
    border-bottom: 3px solid red;
    border-radius: 5px;
  }

  &.active {
    border-left: 3px solid red;
    border-right: 3px solid red;
    border-radius: 7px;
  }

  &.active:hover {
    cursor: default;
    border-bottom: none;
  }
`;
