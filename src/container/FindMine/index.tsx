import React, { useState, useEffect } from 'react';

import { 
  Container, 
  Div,
  CustomInput,
  Buttons
} from '../../components/Common';
import { 
  BetInput, 
  BetSelect, 
  GamePanel, 
  SideBar 
} from '../../components/view/FindMine';

export const FindMine: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [mines, setMines] = useState<number>(3);
  const [btcAmount, setBtcAmount] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<boolean>(false);

  const divideAmount = () => {
    if (amount !== undefined)
      setAmount(amount / 2);
  };

  const multiAmount = () => {
    if (amount !== undefined)
      setAmount(amount * 2)
  }

  useEffect(() => {
    if (amount !== undefined)
      setBtcAmount(amount * Math.pow(10, -6))
  }, [amount])

  return (
    <Container>
      <SideBar>
        <BetInput
          label='Bet Amount'
          rightLabel={'BTC ' + btcAmount?.toFixed(8)}
          icon='dollar-sign.png'
          name='amount'
          value={amount?.toFixed(2) || 0.00}
          type='number'
          onChange={(e) => setAmount(+e.target.value)}
          step={0.01}
          divideAmount={divideAmount}
          multiAmount={multiAmount}
          iconPosition='92px'
          disabled={gameStatus}
        />
          {gameStatus ?
            <Div.ColumnDiv>
              <Div.RowDiv>
                <CustomInput.Input 
                  label='Mines'
                  name='mines'
                  value={mines || 0}
                  type='text'
                  disabled={true}
                  width='100%'
                  icon='dollar-sign.png'
                />
                <Div.SpaceDiv></Div.SpaceDiv>
                <CustomInput.Input 
                  label='Gems'
                  name='gems'
                  value={25 - mines || 0}
                  type='text'
                  disabled={true}
                  width='100%'
                  icon='dollar-sign.png'
                />
              </Div.RowDiv>
              <CustomInput.Input 
                label='Total Profit (0x)'
                rightLabel={'BTC ' + btcAmount?.toFixed(8)} 
                name='profile'
                value={mines || 0}
                type='text'
                disabled={true}
                width='100%'
                icon='dollar-sign.png'
              />
              <Buttons.Button
                backgroundcolor='#314351'
                padding='13px'
                hovercolor='#3e5463'
                radius='5px'
                margin='2px 0 15px 0'
                color='#b5b8d1'
                hoverFontColor='#fff'
              > 
                Pick random tile
              </Buttons.Button>
            </Div.ColumnDiv>
             :
            <BetSelect 
              label='Mines'
              name='mines'
              value={mines}
              type='select'
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMines(parseInt(e.target.value))}
            />
          }
        <Buttons.Button
          backgroundcolor='#00ec37'
          padding='19px'
          hovercolor='#00ff46'
          radius='5px'
          onClick={() => setGameStatus(!gameStatus)}
        >
          {gameStatus ? 'Cashout' : 'Bet'}
        </Buttons.Button>
      </SideBar>
      <GamePanel>
        game panel.
      </GamePanel>
    </Container>
  )
}
