import styled, { keyframes, css } from "styled-components";
import { ElementState } from "./type";
import { GameType } from ".";

const scaleUp = keyframes`
  0% { transform: scale(1); opacity: 1; background-color: #304452; }
  30% { transform: scale(1.1); opacity: 1; background-color: #304452; }
  60% { transform: scale(1); opacity: 1; background-color: #304452; }
  70% { transform: scale(1); opacity: 1; background-color: #304452; }
  90% { transform: scale(0); opacity: 0; background-color: #304452; }
  100% { transform: scale(1); opacity: 1; background-color: #091723 }
`

const ImageAnimatinClick = keyframes`
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`

const ImageAnimatinRest = keyframes`
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(.7); opacity: .5; }
`

const EngGameAnimation = keyframes`
  0% { opacity: 0; transform: scale(0); }
  100% { opacity: 1; transform: scale(1); }
`

export const ImageButton = styled.img<{status: GameType.ElementState}>`
  width: 80px;
  animation: ${props => 
    (props.status === GameType.ElementState.rest || props.status === GameType.ElementState.bomb) ? 
      ImageAnimatinRest : 
      ImageAnimatinClick} 
    .3s forwards 1s;
  ${props => props.status === GameType.ElementState.explore && 
    css`
      position: absolute;
      right: -12px;
      top: -23px;
      width: 150px;
      z-index: -1;
    `
  }
  opacity: 0;
  transition: .2s;
  &:active {
    width: 56px;
  }
`;

export const GamePanel = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #11202d;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ElementContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 600px;
`

export const GameElementStyle = styled.button<{status: ElementState}>`
  width: 112px;
  height: 112px;
  position: relative;
  border-radius: 10px;
  background-color: #304452;
  border: 0;
  cursor: pointer;
  margin-bottom: 6px;
  ${props => props.status ? 
    css`animation: ${scaleUp} 1s forwards; ` 
    : css`
        &:hover {
          background-color: #576f85;
          transform: translateY(-0.15em);
        };
        box-shadow: 0 0.4em 0 0 #213743;`
  };
  &:active {
    line-height: 1rem;
    transform: translateY(0em);
  };
`

export const EndGame = styled.div`
  position: absolute;
  padding: 0.875rem 2rem;
  opacity: 0;
  background-color: #223742;
  border: 3px solid #00ec37;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${EngGameAnimation} .3s forwards;
  right: 726px;
  top: 426px;
  font-weight: 500;
  color: #00ec37;
  align-items: center;
  animation-delay: 1.4s
`

export const EndGameCount = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const EndGameMark = styled.div`
  font-size: .875rem;
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
