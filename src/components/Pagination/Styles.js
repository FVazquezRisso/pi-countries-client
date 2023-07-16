import styled, { keyframes } from "styled-components";
import { getRandomColor } from "../../utils/randomColors";

export const color1 = getRandomColor(true);
export const color2 = getRandomColor(true);

const neonAnimation = keyframes`
  0% {
        box-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
      0 0 7.35px ${color1},
      0 0 9.8px ${color1},
      0 0 12.25px ${color1},
      0 0 14.7px ${color1};
  }
  50% {
      box-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
      0 0 7.35px ${color2},
      0 0 9.8px ${color2},
      0 0 12.25px ${color2},
      0 0 14.7px ${color2};
  }
  100% {
      box-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
      0 0 7.35px ${color1},
      0 0 9.8px ${color1},
      0 0 12.25px ${color1},
      0 0 14.7px ${color1};
    }
`;

export const PaginationContainer = styled.div`
  display: flex;
  padding: 0 0.75rem;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  background-color: #111;
  border-radius: 10px;
  user-select: none;
  animation: ${neonAnimation} 5s ease-in-out infinite;
`;

export const PaginationButton = styled.button`
  margin: 0 0.5rem;
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  transition-property: transform, color, text-shadow;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
  
  ${(props) =>
    !props.disabled &&
    `
    cursor: pointer;
    color: rgba(228, 227, 227, 0.87);
      &:hover {
        transform: scale(1.02);
        color: white;
        text-shadow: 0 0 10px;
      }
    `}
`;
