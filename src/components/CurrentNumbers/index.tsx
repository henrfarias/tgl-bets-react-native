import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { Container } from './styles';

import CurrentNumberItem from './CurrentNumberItem';

const CurrentNumbers: React.FC = () => {
  const { game, numbers } = useAppSelector((state) => state.current_game);

  return (
    <Container horizontal>
      {numbers.map((number) => (
        <CurrentNumberItem color={game.color} key={number} number={number} />
      ))}
    </Container>
  );
};

export default CurrentNumbers;
