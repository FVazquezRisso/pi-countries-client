import styled, { keyframes } from "styled-components";
import { getRandomColor } from "../../../utils/randomColors";

const color1 = getRandomColor();
const color2 = getRandomColor();
const color3 = getRandomColor();

const animation = keyframes`
  0% {
    color: ${color1};
     box-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
    0 0 7.35px ${color1},
    0 0 9.8px ${color1},
    0 0 12.25px ${color1},
    0 0 14.7px ${color1};
  }

  25% {
    color: ${color2};
       box-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
    0 0 7.35px ${color2},
    0 0 9.8px ${color2},
    0 0 12.25px ${color2},
    0 0 14.7px ${color2};
  }

  50% {
    color: ${color3};
       box-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
    0 0 7.35px ${color3},
    0 0 9.8px ${color3},
    0 0 12.25px ${color3},
    0 0 14.7px ${color3};
  }

  75% {
    color: ${color2};
       box-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
    0 0 7.35px ${color2},
    0 0 9.8px ${color2},
    0 0 12.25px ${color2},
    0 0 14.7px ${color2};
  }

  100% {
    color: ${color1};
       box-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
    0 0 7.35px ${color1},
    0 0 9.8px ${color1},
    0 0 12.25px ${color1},
    0 0 14.7px ${color1};
  }
`;

export const ActivitySelector = styled.select`
  margin: 0 1rem;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #111;
  outline: none;
  appearance: none;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  animation: ${animation} 5s ease-in-out infinite;
`;
