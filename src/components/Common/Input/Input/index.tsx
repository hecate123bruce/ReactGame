import React from "react";

import { 
  InputProps,
  InputDiv,
  InputLabel,
  InputStyle,
  Icon,
  InputGroupStyle,
  InputLabelDiv
} from "../index.style";

import { 
  Button,
  ButtonGroup
} from "../../Button";

import * as Div from "../../Div";

import icondollar from '../img/dollar.png';
import iconjewel from '../img/disabled_jewel.png';
import iconbomb from '../img/disabled_bomb.png';

export const Input: React.FC<InputProps> = (props) => {
  const { 
    label, 
    icon, 
    width,
    rightLabel,
    buttons,
    iconPosition,
    backgroundColor } = props;

  return (
    <InputDiv width={String(width)}>
      {
        rightLabel ? 
            <InputLabelDiv>
              <InputLabel key={label}>{label}</InputLabel>
              <InputLabel key={rightLabel} fontSize='.75rem' padding='4px 0 0 0px'>{rightLabel}</InputLabel>
            </InputLabelDiv> 
          : 
            <InputLabel>{label}</InputLabel>
      }
      <InputGroupStyle>
        <InputStyle 
          { ...props }
          width="100%"
          backgroundColor={backgroundColor}
        />
        {icon && <Icon 
          position={iconPosition}
          src={
            {
              'dollar' : (
                icondollar
              ),
              'jewel' : (
                iconjewel
              ),
              'bomb' : (
                iconbomb
              )
            }[icon]
          }
        />}
        {buttons && <ButtonGroup>
          {buttons?.map((el, index) => (
            <>
              {!index ? '' : <Div.DividerDiv></Div.DividerDiv>}
              <Button 
                key={index}
                backgroundcolor='#304452'
                color='#b5b8d1'
                fontSize='.875rem'
                padding='.625rem'
                hovercolor='#3e5463'
                onClick={el.onClick}
                width='2.8rem'
                height='2.75rem'
                hoverFontColor="#fff"
              >
                {el.name}
              </Button>
            </>
          ))}
        </ButtonGroup>}
      </InputGroupStyle>
    </InputDiv>
  )
}
