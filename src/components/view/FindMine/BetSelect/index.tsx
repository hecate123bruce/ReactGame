import React from 'react';
import { CustomInput } from '../../../Common';
import { SelectProps } from '../../../Common/Input/index.style';

export const BetSelect: React.FC<SelectProps> = (props) => {
  
  const options = [];
  
  for (let i = 1; i < 25; i++) {
    options.push({value: i, title: i})
  }

  return (
    <CustomInput.Select 
      { ...props } 
      options={options}
    />
  )
}