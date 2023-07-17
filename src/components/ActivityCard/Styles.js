import styled, { keyframes } from "styled-components";
import { getRandomColor } from "../../utils/randomColors";

export const color1 = getRandomColor(true);
export const color2 = getRandomColor(true);

const boxAnimation = keyframes`
  0% {
    color: ${color1};
    box-shadow: 0 0 1.4px #fff, 0 0 2.8px #fff, 0 0 5.6px #fff,
      0 0 5.88px ${color1},
      0 0 7.84px ${color1},
      0 0 9.8px ${color1},
      0 0 11.76px ${color1};
  }
  50% {
    color: ${color2};
    box-shadow: 0 0 1.4px #fff, 0 0 2.8px #fff, 0 0 5.6px #fff,
      0 0 5.88px ${color2},
      0 0 7.84px ${color2},
      0 0 9.8px ${color2},
      0 0 11.76px ${color2};
  }
  100% {
    color: ${color1};
    box-shadow: 0 0 1.4px #fff, 0 0 2.8px #fff, 0 0 5.6px #fff,
      0 0 5.88px ${color1},
      0 0 7.84px ${color1},
      0 0 9.8px ${color1},
      0 0 11.76px ${color1};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 250px;
  height: 200px;
  margin: 1rem;
  padding: 1rem 0.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.25rem;
  border: 2px solid transparent;
  border-radius: 15px;
  animation: ${boxAnimation} 5s ease-in-out infinite;
`;

export const Name = styled.p`
  margin: 0.5rem 0 0 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Info = styled.p`
  margin: 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  margin: 1.5rem 0 0.5rem 0;
  padding: 1rem;
  text-decoration: none;
  font-weight: bolder;
  border: 2px solid transparent;
  border-radius: 15px;
  animation: ${boxAnimation} 5s ease-in-out infinite;
  background-color: #111;

  &:hover {
    transform: scale(1.05);
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
    cursor: pointer;
  }
`;
