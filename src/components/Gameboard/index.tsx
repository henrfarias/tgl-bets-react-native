import React, { useState, useEffect } from 'react';
import { Container } from './styles';

import GameNumber from '../GameNumber';

const Gameboard: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const grid = () => {
    if(numbers.length != 0) {
      return;
    }
    for (let i = 0; i < 50; i++) {
      numbers.push(i + 1);
    }
  };
  grid();

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
      {numbers.map((number) => (<GameNumber key={`${number}n`} index={number} />))}
    </Container>
  );
};

export default Gameboard;
