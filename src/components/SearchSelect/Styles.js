import styled, { keyframes } from "styled-components";
import { color1, color2 } from "../../pages/FormPage/Styles";

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

const animationSuggestions = keyframes`
  0% {
    color: ${color1};
    box-shadow: 0 1.4px 2.8px #fff, 0 2.8px 5.6px #fff, 0 5.6px 5.88px ${color1},
      0 5.6px 7.84px ${color1}, 0 5.6px 9.8px ${color1}, 0 5.6px 11.76px ${color1};
  }
  50% {
    color: ${color2};
    box-shadow: 0 1.4px 2.8px #fff, 0 2.8px 5.6px #fff, 0 5.6px 5.88px ${color2},
      0 5.6px 7.84px ${color2}, 0 5.6px 9.8px ${color2}, 0 0 0 ${color2};
  }
  100% {
    color: ${color1};
    box-shadow: 0 1.4px 2.8px #fff, 0 2.8px 5.6px #fff, 0 5.6px 5.88px ${color1},
      0 5.6px 7.84px ${color1}, 0 5.6px 9.8px ${color1}, 0 0 0 ${color1};
  }
`;

const hoverAnimation = keyframes`
  0% {
    border-color: ${color1};
  }

  50% {
    border-color: ${color2};
  }

  100% {
    border-color: ${color1};
  }
`;

export const SearchSelectContainer = styled.div`
  display: flex;
  padding: 2rem;
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  border: 2px solid white;
  border-radius: 15px;
  animation: ${boxAnimation} 5s ease-in-out infinite;
`;

export const Input = styled.input`
  background-color: #111;
  padding: 8px;
  font-size: 16px;
  border: 2px solid white;
  border-radius: 4px;
  width: 300px;
  margin: 0 auto;
  outline: none;
  animation: ${boxAnimation} 5s ease-in-out infinite;
`;

export const SuggestionsList = styled.ul`
  background-color: #111;
  list-style: none;
  padding: 0;
  margin: 2.1rem 20% 0 20%;
  max-height: 150px;
  overflow-y: scroll;
  width: 60%;
  position: absolute;
  top: 2.2rem;
  left: 0;
  border: 2px solid white;
  border-top: none;
  box-sizing: border-box;
  animation: ${animationSuggestions} 5s ease-in-out infinite;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SuggestionItem = styled.li`
  padding: 8px;
  cursor: pointer;
`;

export const SelectedList = styled.ul`
  list-style: none;
  margin-top: 10px;
`;

export const SelectedItem = styled.li`
  padding: 8px;
  cursor: pointer;
  animation: ${hoverAnimation} 5s ease-in-out infinite;

  &:hover {
    border-bottom: 2px solid red;
    border-radius: 5px;
  }
`;

export const DefaultSelectedItem = styled.li`
  padding: 8px;
  cursor: pointer;
  animation: ${hoverAnimation} 5s ease-in-out infinite;
  font-weight: bold;

  &:hover {
    cursor: not-allowed;
  }
`;

export const SelectedText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0;
`