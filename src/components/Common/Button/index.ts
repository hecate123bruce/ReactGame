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
  hoverFontColor?: string,
  width?: string,
  height?: string
}

export const Button = styled.button<IButton>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || ''};
  color: ${props => props.color};
  font-size: ${props => props.fontSize || '.875rem'};
  background-color: ${props => props.backgroundcolor};
  text-align: center;
  text-decoration: none;
  border: none;
  font-family: inherit;
  font-weight: 500;
  line-height:1.25rem;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.12);
  border-radius: ${props => props.radius || '5px'};
  padding: ${props => props.padding};
  transition-duration: 0.4s;
  cursor: pointer;
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
