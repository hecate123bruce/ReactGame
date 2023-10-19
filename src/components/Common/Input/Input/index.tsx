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

export const Input: React.FC<InputProps> = (props) => {
  const { 
    label, 
    icon, 
    width,
    rightLabel,
    buttons,
    iconPosition } = props;

  return (
    <InputDiv width={String(width)}>
      {
        rightLabel ? 
            <InputLabelDiv>
              <InputLabel key={label}>{label}</InputLabel>
              <InputLabel key={rightLabel} fontSize='12px' padding='4px 0 0 0px'>{rightLabel}</InputLabel>
            </InputLabelDiv> 
          : 
            <InputLabel>{label}</InputLabel>
      }
      <InputGroupStyle>
        <InputStyle 
          { ...props }
          width="100%"
        />
        {icon && <Icon src={'./img/' + icon} position={iconPosition} />}
        {buttons && <ButtonGroup style={{marginLeft: '-2px'}}>
          {buttons?.map((el, index) => (
            <>
              {!index ? '' : <Div.DividerDiv></Div.DividerDiv>}
              <Button 
                key={index}
                backgroundcolor='#304452'
                color='#b5b8d1'
                fontSize='12px'
                padding='15px 10px 15px 15px'
                hovercolor='#3e5463'
                onClick={el.onClick}
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
