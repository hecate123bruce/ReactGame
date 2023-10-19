import React from 'react';

import { CustomInput } from '../../../Common';

interface BetInputPops extends CustomInput.InputProps {
  divideAmount: () => void,
  multiAmount: () => void,
}

export const BetInput: React.FC<BetInputPops> = (props) => {
  const buttons: CustomInput.InputButton[] = [
    {
      name: '1/2',
      onClick: props.divideAmount
    },
    {
      name: '2x',
      onClick: props.multiAmount
    }
  ]

  return (
    <CustomInput.Input
      { ...props }
      buttons={buttons}
    />
  )
}