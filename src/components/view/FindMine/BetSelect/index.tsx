import React from 'react';
import { CustomInput } from 'components';
import { SelectProps } from 'components/common/Input/index.style';

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