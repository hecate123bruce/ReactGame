import React from 'react';
import { GameElementStyle, ImageButton } from '../index.style';
import { GameProps } from '../type';
import { GameType } from '..';
import gemUrl from './img/jewel.svg';
import bombUrl from './img/bomb.svg';
import exploreUrl from './img/explosion.gif';

export const GameElement: React.FC<GameProps> = (props) => {
  return (
    <GameElementStyle { ...props }>
      {!!props.status && (
        { 
          [GameType.ElementState.gem]: (
            <ImageButton src={gemUrl} status={props.status} />
          ),
          [GameType.ElementState.bomb]: (
            <ImageButton src={bombUrl} status={props.status} />
          ),
          [GameType.ElementState.explore]: (
            <>
              <ImageButton src={bombUrl} status={GameType.ElementState.closed} />
              <ImageButton src={exploreUrl} status={props.status} />
            </>
          ),
          [GameType.ElementState.rest]: (
            <ImageButton src={gemUrl} status={props.status} />
          ),
          [GameType.ElementState.closed]: (
            null
          ),
        }[props.status])
      }
      {/* {!!props.status && (<ImageButton src={props.status === GameType.ElementState.bomb ? bombUrl : gemUrl} status={props.status} />)}
      {!!props.status && props.status === GameType.ElementState.bomb && (<ImageButton src={exploreUrl} status={GameType.ElementState.explore} />)} */}
    </GameElementStyle>
  )
}