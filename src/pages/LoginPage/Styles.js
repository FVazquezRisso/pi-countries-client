import styled, { keyframes } from "styled-components";
import { getRandomColor } from "../../utils/randomColors";
import { Link } from "react-router-dom";

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

const registerAnimation = keyframes`
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

export const LoginContainer = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
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

export const Form = styled.form`
  display: flex;
  width: 35%;
  height: 60%;
  padding: 2rem 0.75rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: rgba(1, 1, 1, 0.8);
  border: 2px solid transparent;
  border-radius: 25px;
  animation: ${boxAnimation} 5s ease-in-out infinite;
`;

export const Title = styled.h2`
  margin: 0.5rem 0;
  font-size: 1.8rem;
`;

export const Label = styled.label`
  width: 80%;
  margin: 0.5rem 0;
  min-height: 10%;
  padding: 0.25rem 2rem;
  display: grid;
  position: relative;
  left: 0;
  align-items: center;
  font-weight: bolder;
  grid-template-columns: 1fr 1fr;
  animation: ${textAnimation} 5s ease-in-out infinite;
`;

export const Input = styled.input`
  margin: 0.6rem 1.5rem;
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
  animation: ${boxAnimation} 5s ease-in-out infinite;
`;

export const ErrorMessage = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  margin: 1rem 0 1rem 0;
  padding: 1rem;
  text-decoration: none;
  font-weight: bolder;
  border: 2px solid white;
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

  &.disabled {
    animation: none;
    border-color: #4f4f4f;

    &:hover {
      cursor: not-allowed;
      transform: scale(1);
    }
  }
`;

export const ToRegister = styled.p`
  margin: 0;
`;

export const Register = styled(Link)`
  text-decoration: none;
  animation: ${registerAnimation} 5s ease-in-out infinite;

  &:hover {
    border-bottom: 2px solid transparent;
    border-radius: 4px;
  }
`;
