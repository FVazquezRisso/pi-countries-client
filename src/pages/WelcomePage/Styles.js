import styled, { keyframes } from "styled-components";
import { getRandomColor } from "../../utils/randomColors";
import { Link } from "react-router-dom";

const color1 = getRandomColor(true);
const color2 = getRandomColor(true);

const boxAnimation = keyframes`
  0% {
    box-shadow: 0 0 2.8px #fff, 0 0 5.6px #fff, 0 0 11.2px #fff,
      0 0 11.76px ${color1},
      0 0 15.68px ${color1},
      0 0 19.6px ${color1},
      0 0 23.52px ${color1};
  }
  50% {
    box-shadow: 0 0 2.8px #fff, 0 0 5.6px #fff, 0 0 11.2px #fff,
      0 0 11.76px ${color2},
      0 0 15.68px ${color2},
      0 0 19.6px ${color2},
      0 0 23.52px ${color2};
  }
  100% {
    box-shadow: 0 0 2.8px #fff, 0 0 5.6px #fff, 0 0 11.2px #fff,
      0 0 11.76px ${color1},
      0 0 15.68px ${color1},
      0 0 19.6px ${color1},
      0 0 23.52px ${color1};
  }
`;

const textAnimation = keyframes`
  0% {
    color: ${color1};
  }

  50% {
    color: ${color2};
  }
  
  100% {
    color: ${color1};
  }
`;

export const MainContainer = styled.main`
  display: flex;
  width: 100vw;
  height: 96vh;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/42937.png");
    background-size: cover;
    filter: blur(0px) brightness(0.2);
    z-index: -1;
    background-position: 0;
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  width: 30%;
  height: 30%;
  padding: 2rem;
  align-items: center;
  flex-direction: column;
  background-color: rgba(1, 1, 1, 0.8);
  border-radius: 25px;
  animation: ${boxAnimation} 5s ease-in-out infinite;
`;

export const Title = styled.h1`
  margin-top: 0.5rem;
  margin-bottom: 0;
  text-align: center;
  animation: ${textAnimation} 5s ease-in-out infinite;
`;

export const AuthorName = styled.h4`
  margin: 0 auto;
  text-align: center;
  animation: ${textAnimation} 5s ease-in-out infinite;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-around;
`;

export const Button = styled(Link)`
  margin-top: 3rem;
  padding: 1rem;
  text-decoration: none;
  font-weight: bolder;
  border: 2px solid white;
  border-radius: 15px;
  animation: ${boxAnimation} 5s ease-in-out infinite,
    ${textAnimation} 5s ease-in-out infinite;

  &:hover {
    transform: scale(1.05);
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
  }
`;
