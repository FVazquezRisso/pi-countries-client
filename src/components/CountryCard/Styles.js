import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  width: 180px;
  margin: 0 2rem;
  padding: 0rem;
  padding-bottom: 0;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;

  &:hover {
    transform: scale(1.03);
    transition-property: transform;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;

    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,
      0 0 21px ${(props) => props.$hoverColor},
      0 0 28px ${(props) => props.$hoverColor},
      0 0 35px ${(props) => props.$hoverColor},
      0 0 42px ${(props) => props.$hoverColor};
  }
`;

export const FlagImg = styled.div`
  position: relative;
  width: 180px;
  height: 120px;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

export const Name = styled.p`
  position: absolute;
  margin: 0.25rem;
  bottom: 0;
  text-align: left;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 4px;
  border-radius: 4px;
  z-index: 1;
  backdrop-filter: blur(1px);
`;

export const Continent = styled.img`
  position: absolute;
  margin: 0.25rem;
  padding: 0.25rem;
  width: 2rem;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  backdrop-filter: blur(1px);
`;  
