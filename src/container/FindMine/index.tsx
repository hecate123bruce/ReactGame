import React, { useState, useEffect, useRef } from 'react';

import { 
  Container, 
  Div,
  CustomInput,
  Buttons
} from '../../components/Common';
import { 
  BetInput, 
  BetSelect, 
  SideBar,
  GameType,
  Game,
  GameStyle
} from '../../components/view/FindMine';

import iconDollar from '../../components/Common/Input/img/dollar.png';
import { IGameStatus } from '../../type';


export const FindMine: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [mines, setMines] = useState<number>(3);
  const [btcAmount, setBtcAmount] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<IGameStatus>(IGameStatus.before);
  const [elements, setElements] = useState<GameType.ElementState[]>([]);
  const [minePosition, setMinePosition] = useState<number[]>([]);
  const [calculating, setCalculating] = useState<boolean>(false);

  const firstRender = useRef<boolean | null>(true);
  const cost = useRef<number>(1);

  useEffect(() => {
    elementGenerator();
    randomNumberGenerator();
  }, [])

  useEffect(() => {
    if (gameStatus === IGameStatus.before) {
      elementGenerator();
      checkFirstRender();
      randomNumberGenerator();
      if (cost?.current)
        cost.current = 1;
    } else if(!firstRender?.current) {
        
      if (gameStatus !== IGameStatus.on) {
        setElements([ 
        ...elements.map(
          (el, index) => {
            if ( minePosition.includes(index) ) {
              if (el === GameType.ElementState.explore)
                return el
              else return GameType.ElementState.bomb;
            } else if ( el === GameType.ElementState.closed ) {
              return GameType.ElementState.rest;
            }
            return el;
          }) 
        ]);

        if (gameStatus !== IGameStatus.failure)
          setGameStatus(IGameStatus.success)
      }
    }
    
  }, [gameStatus])

  useEffect(() => {
    if (amount !== undefined)
      setBtcAmount(amount * Math.pow(10, -6))
  }, [amount])

  const gameController = () => {
    if (gameStatus === IGameStatus.before) {
      setGameStatus(IGameStatus.on);
    } else if (gameStatus === IGameStatus.on) {
      setGameStatus(IGameStatus.success);
    } else setGameStatus(IGameStatus.before)
  }

  const divideAmount = () => {
    if (amount !== undefined)
      setAmount(amount / 2);
  };

  const multiAmount = () => {
    if (amount !== undefined)
      setAmount(amount * 2)
  }

  const elementGenerator = () => {
    let temp: GameType.ElementState[] = [];
    for (let i = 0; i < 25; i++) {
      let tempValue: GameType.ElementState = GameType.ElementState.closed;
      temp.push(tempValue)
    }
    setElements(temp);
  }

  const setElement = (key: number) => {
    let temp: GameType.ElementState[] = [ ...elements ];
    if ( minePosition.includes(key) ) {
      temp[key] = GameType.ElementState.explore;
      setGameStatus(IGameStatus.failure);
    } else {
      temp[key] = GameType.ElementState.gem;
      if (cost?.current) cost.current++;
    }
    setElements([ ...temp ]);
  }

  const setRandomElement = () => {
    setCalculating(true);
    setElement(Math.floor(Math.random() * 24));
    setTimeout(() => setCalculating(false), 2000) ;
  }

  const checkFirstRender = () => {
    if (firstRender?.current) {
      firstRender.current = false;
    }
  }

  const randomNumberGenerator = () => {
    const randomNumberArray: number[] = [];
    const max = 24;
    const min = 0;

    while (randomNumberArray.length < mines) {
      const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;

      if (!randomNumberArray.includes(randomNumber)) {
        randomNumberArray.push(randomNumber);
      }
    }
    
    setMinePosition([ ...randomNumberArray ]);
  }

  return (
    <Container>
      <SideBar>
        <BetInput
          label='Bet Amount'
          rightLabel={'BTC ' + btcAmount?.toFixed(8)}
          icon='dollar'
          name='amount'
          value={amount?.toFixed(2) || 0.00}
          type='number'
          onChange={(e) => setAmount(+e.target.value)}
          step={0.01}
          divideAmount={divideAmount}
          multiAmount={multiAmount}
          iconPosition='101px'
          disabled={gameStatus === IGameStatus.on}
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
                  icon='bomb'
                  backgroundColor='#98ae'
                  color='#fff'
                />
                <Div.SpaceDiv></Div.SpaceDiv>
                <CustomInput.Input 
                  label='Gems'
                  name='gems'
                  value={25 - mines || 0}
                  type='text'
                  disabled={true}
                  width='100%'
                  icon='jewel'
                  backgroundColor='#98ae'
                  color='#fff'
                />
              </Div.RowDiv>
              <CustomInput.Input 
                label='Total profit (0×)'
                rightLabel={'BTC ' + (mines * cost?.current * btcAmount)?.toFixed(8)} 
                name='profile'
                value={(mines * cost?.current * amount).toFixed(2)}
                type='text'
                disabled={true}
                width='100%'
                icon='dollar'
                backgroundColor='#98ae'
              />
              <Buttons.Button
                backgroundcolor='#314351'
                padding='13px'
                hovercolor='#3e5463'
                radius='5px'
                margin='2px 0 .75rem 0'
                color='#b5b8d1'
                hoverFontColor='#fff'
                height='2.75rem'
                onClick={() => setElement(Math.floor(Math.random() * 24))}
                disabled={gameStatus > 1}
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
          backgroundcolor= {(cost?.current === 1 && gameStatus) ? '#11923c' : '#1fe704'}
          padding='.625rem'
          hovercolor='#00ff46'
          radius='5px'
          fontSize='.875rem'
          height='3.5rem'
          color='#004008'
          disabled={cost?.current === 1 && gameStatus === IGameStatus.on}
          onClick={gameController}
        >
          {gameStatus !== IGameStatus.before ? 'Cashout' : 'Bet'}
        </Buttons.Button>
      </SideBar>
      <GameStyle.GamePanel>
        <GameStyle.ElementContainer>
          {
            elements.map((value: GameType.ElementState, index: number) => (
              <Game.GameElement 
                status={value}
                onClick={() => setElement(index)} 
                disabled={gameStatus !== IGameStatus.on}
              />
            ))
          }
          { gameStatus === IGameStatus.success && <GameStyle.EndGame>
            <GameStyle.EndGameCount>{mines * Math.pow(10, -2)}x</GameStyle.EndGameCount>
            <Div.DividerHDiv />
            <GameStyle.EndGameMark>
              <>{(mines * cost?.current * amount).toFixed(2)}</>
              <CustomInput.Icon src={iconDollar} position='26px' />
              </GameStyle.EndGameMark>
          </GameStyle.EndGame>}
        </GameStyle.ElementContainer>
      </GameStyle.GamePanel>
    </Container>
  )
}
