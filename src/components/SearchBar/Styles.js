import styled, { keyframes } from "styled-components";
import { color1, color2 } from '../Pagination/Styles';

const neonAnimation = keyframes`
  0% {
        color: ${color1};
        box-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
      0 0 7.35px ${color1},
      0 0 9.8px ${color1},
      0 0 12.25px ${color1},
      0 0 14.7px ${color1};
  }
  50% {
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

export const SearchInput = styled.input`
  margin: 1.5rem;
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
  animation: ${neonAnimation} 5s ease-in-out infinite;
`;
