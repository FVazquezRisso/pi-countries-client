import styled, { keyframes } from "styled-components";
import { getRandomColor } from "../../utils/randomColors";

const color1 = getRandomColor(true);
const color2 = getRandomColor(true);

const sideToSideSlide = keyframes`
  0% {
    background: ${color1};
    box-shadow: 0 0 10px ${color1};
    width: 10px;
    left: 0;
  }

  25% {
    background: ${color1};
    box-shadow: 0 0 10px ${color1};
    width: 100px;
    left: 0;
  }

  50% {
    background: ${color2};
    box-shadow: 0 0 10px ${color2};
    width: 10px;
    left: 90px;
  }

  75% {
    background: ${color2};
    box-shadow: 0 0 10px ${color2};
    width: 100px;
    left: 0px;
  }

  100% {
    background: ${color1};
    box-shadow: 0 0 10px ${color1};
    width: 10px;
    left: 0;
  }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div`
  position: relative;
  transform: translateX(-60px);
`;

export const LoadingSlider = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  margin-top: 20px;
  margin: 10px;
  border-radius: 5px;
  background: ${color1};
  box-shadow: 0 0 10px ${color1};
  animation: ${sideToSideSlide} 2s ease infinite;
`;
