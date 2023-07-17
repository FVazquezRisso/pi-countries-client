import styled, { keyframes } from "styled-components";
import { getRandomColor } from "../../utils/randomColors";

export const color1 = getRandomColor(true);
export const color2 = getRandomColor(true);

const animation = keyframes`
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

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const FormContainer = styled.form`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const InputName = styled.input`
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
  animation: ${animation} 5s ease-in-out infinite;
`;

export const InputDifficulty = styled.input`
  -webkit-appearance: none;
  margin: 1.2rem 0;
  width: 100%;
  outline: none;
  border-radius: 15px;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    background: #111;
    border-radius: 25px;
  }

  &::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 7px;
    background: #111;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3.6px;
    border: 2px solid white;
  }

  animation: ${animation} 5s ease-in-out infinite;
`;

export const InputDuration = styled.input`
  margin: 0.5rem 1.5rem;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #111;
  outline: none;
  animation: ${animation} 5s ease-in-out infinite;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SelectSeason = styled.select`
  margin: 0.6rem 1rem;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #111;
  color: #fff;
  outline: none;
  appearance: none;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  animation: ${animation} 5s ease-in-out infinite;
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
  border: 2px solid transparent;
  border-radius: 15px;
  animation: ${animation} 5s ease-in-out infinite;
`;

export const Button = styled.button`
  margin: 1rem 0;
  padding: 1rem;
  text-decoration: none;
  font-weight: bolder;
  border: 2px solid white;
  border-radius: 15px;
  animation: ${animation} 5s ease-in-out infinite;
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
