import React, { useState, memo } from 'react';
import { Container } from './styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import GameNumber from '../GameNumber';
import { numbersHandler } from '../../store/reducers/currentGame.reducer';
import { useCallback } from 'react';

const Gameboard: React.FC = () => {
  const numbers: number[] = [];
  const currentGame = useAppSelector((state) => state.current_game);
  const dispatch = useAppDispatch();

  const grid = () => {
    if (numbers.length != 0) {
      return;
    }
    for (let i = 0; i < 50; i++) {
      numbers.push(i + 1);
    }
  };
  grid();

  console.log('fui refeito?');
  return (
    <Container
      contentContainerStyle={{
        paddingTop: 280,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 100,
      }}
    >
      {numbers.map((number) => (
        <GameNumber
          key={`${number}n`}
          index={number}
          color={currentGame.game.color}
          checked={currentGame.numbers.includes(number)}
          onPress={() => dispatch(numbersHandler(number))}
        />
      ))}
    </Container>
  );
};

export default memo(Gameboard);
