import styled, { keyframes } from 'styled-components'
import { getRandomColor } from '../utils/randomColors'


const color1 = getRandomColor(true);
const color2 = getRandomColor(true);
const color3 = getRandomColor(true);

const animation = keyframes`
  0% {
    color: ${color1};
     text-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
    0 0 7.35px ${color1},
    0 0 9.8px ${color1},
    0 0 12.25px ${color1},
    0 0 14.7px ${color1};
  }

  25% {
    color: ${color2};
       text-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
    0 0 7.35px ${color2},
    0 0 9.8px ${color2},
    0 0 12.25px ${color2},
    0 0 14.7px ${color2};
  }

  50% {
    color: ${color3};
       text-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
    0 0 7.35px ${color3},
    0 0 9.8px ${color3},
    0 0 12.25px ${color3},
    0 0 14.7px ${color3};
  }

  75% {
    color: ${color2};
       text-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
    0 0 7.35px ${color2},
    0 0 9.8px ${color2},
    0 0 12.25px ${color2},
    0 0 14.7px ${color2};
  }

  100% {
    color: ${color1};
       text-shadow: 0 0 1.75px #fff, 0 0 3.5px #fff, 0 0 7px #fff,
    0 0 7.35px ${color1},
    0 0 9.8px ${color1},
    0 0 12.25px ${color1},
    0 0 14.7px ${color1};
  }
`;


export const NoResultsContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoResultsMessage = styled.p`
  text-align: center;
  font-size: 2.5rem;
  animation: ${animation} 5s ease-in-out infinite;
`;