import React from 'react';

import { 
  SelectProps, 
  SelectStyle, 
  InputDiv, 
  InputLabel 
} from '../index.style';

export const Select: React.FC<SelectProps> = (props) => {
  
  const { options, label } = props;

  return (
    <InputDiv>
      <InputLabel>{label}</InputLabel>
      <SelectStyle { ...props }>
        {options && options.map(el => (
          <option value={el.value}  key={el.value}>{el.title}</option>
        ))}
      </SelectStyle>
    </InputDiv>
  )
}