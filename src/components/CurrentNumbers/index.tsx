import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Container } from './styles';

import CurrentNumberItem from './CurrentNumberItem';
import { numbersHandler } from '../../store/reducers/currentGame.reducer';

const CurrentNumbers: React.FC = () => {
  const { game, numbers } = useAppSelector((state) => state.current_game);
  const dispatch = useAppDispatch();

  return (
    <Container horizontal>
      {numbers.map((number) => (
        <CurrentNumberItem
          onPress={() => {
            dispatch(numbersHandler(number));
          }}
          color={game.color}
          key={number}
          number={number}
        />
      ))}
    </Container>
  );
};

export default CurrentNumbers;
