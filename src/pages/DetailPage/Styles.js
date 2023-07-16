import styled, { keyframes } from "styled-components";
import { getRandomColor } from "../../utils/randomColors";
import { Link } from 'react-router-dom'

const color1 = getRandomColor();
const color2 = getRandomColor();
const color3 = getRandomColor();

const boxAnimation = keyframes`
  0% {
    color: ${color1};
     box-shadow: 0 0 3.5px #fff, 0 0 7px #fff, 0 0 14px #fff,
    0 0 14.7px ${color1},
    0 0 19.6px ${color1},
    0 0 24.5px ${color1},
    0 0 29.4px ${color1};
  }

  25% {
    color: ${color2};
   box-shadow: 0 0 3.5px #fff, 0 0 7px #fff, 0 0 14px #fff,
    0 0 14.7px ${color2},
    0 0 19.6px ${color2},
    0 0 24.5px ${color2},
    0 0 29.4px ${color2};
  }

  50% {
    color: ${color3};
   box-shadow: 0 0 3.5px #fff, 0 0 7px #fff, 0 0 14px #fff,
    0 0 14.7px ${color3},
    0 0 19.6px ${color3},
    0 0 24.5px ${color3},
    0 0 29.4px ${color3};
  }

  75% {
  color: ${color2};
  box-shadow: 0 0 3.5px #fff, 0 0 7px #fff, 0 0 14px #fff,
    0 0 14.7px ${color2},
    0 0 19.6px ${color2},
    0 0 24.5px ${color2},
    0 0 29.4px ${color2};
  }

  100% {
    color: ${color1};
    box-shadow: 0 0 3.5px #fff, 0 0 7px #fff, 0 0 14px #fff,
    0 0 14.7px ${color1},
    0 0 19.6px ${color1},
    0 0 24.5px ${color1},
    0 0 29.4px ${color1};
  }
`;

const textAnimation = keyframes`
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

export const DetailPageContainer = styled.div`
  display: grid;
  height: 88vh;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div`
  padding-top: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const Image = styled.img`
  border-radius: 25px;
  animation: ${boxAnimation} 5s ease-in-out infinite;
`;

export const Name = styled.h2`
  font-size: 3rem;
  animation: ${textAnimation} 5s ease-in-out infinite;
`;

export const Info = styled.p`
  width: 25rem;
  margin: 0.75rem 0;
  padding: 1rem;
  font-size: 1.25rem;
  border: 2px solid white;
  animation: ${boxAnimation} 5s ease-in-out infinite;
  border-radius: 15px;
`;

export const Button = styled(Link)`
  margin-top: 3.5rem;
  padding: 1rem;
  text-decoration: none;
  font-weight: bolder;
  border: 2px solid white;
  border-radius: 15px;
  animation: ${boxAnimation} 5s ease-in-out infinite;

  &:hover {
    transform: scale(1.05);
    transition-property: transform;
    transition-duration: .15s;
    transition-timing-function: ease-in-out;
  }
`;