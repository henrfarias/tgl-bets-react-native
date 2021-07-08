import React from 'react';
import {
  Container,
  Decoration,
  ContainerButtons
} from './styles';
import { useAppSelector } from '../../store/hooks';

import Header from '../../components/Header';
import Description from '../../components/Description';
import Rules from '../../components/Rules';
import GameButton from '../../components/GameButton';
import Gameboard from '../../components/Gameboard';

const Game: React.FC = () => {
  const games = useAppSelector((state) => state.games);

  return (
    <Container>
      <Header />
        <Description 
          title='New bet for lotomania'
          label='Choose a game'
        >
          <ContainerButtons horizontal showsHorizontalScrollIndicator={false}>
          {games.map((game) => (
            <GameButton key={game.id} game={game} />
          ))}
          </ContainerButtons>
          <Rules />
          <Decoration />
        </Description>
      <Gameboard>
        
      </Gameboard>
    </Container>
  );
};

export default Game;
