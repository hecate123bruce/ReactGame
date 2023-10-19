import styled from "styled-components";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string,
  backgroundcolor?: string,
  fontSize?: string,
  padding?: string,
  name?: string,
  hovercolor?: string,
  radius?: string,
  margin?: string,
  hoverFontColor?: string
}

export const Button = styled.button<IButton>`
  background-color: ${props => props.backgroundcolor};
  border: none;
  border-radius: ${props => props.radius || '5px'};
  color: ${props => props.color};
  padding: ${props => props.padding};
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  font-size: ${props => props.fontSize};
  cursor: pointer;
  width: 100%;
  margin: ${props => props.margin || '0 0 0 0'};
  &:hover {
    background-color: ${props => props.hovercolor};
    color: ${props => props.hoverFontColor || props.color}
  };
  &:active {
    font-size: .7rem;
    line-height: 1rem;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  & > :not(:last-child) {
    border-radius: 0px;
  };
  & :last-child {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-left: -2px
  };
`
