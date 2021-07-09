import React, { useState } from 'react';
import { Container, Decoration, ContainerButtons } from './styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IGame } from '../../types/IGames';

import Header from '../../components/Header';
import Description from '../../components/Description';
import Rules from '../../components/Rules';
import GameButton from '../../components/GameButton';
import Gameboard from '../../components/Gameboard';
import { setCurrentGame } from '../../store/reducers/currentGame.reducer';

const Game: React.FC = () => {
  const games = useAppSelector((state) => state.games);
  const currentGame = useAppSelector((state) => state.current_game);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Header />
      <Description title='New bet for lotomania' label='Choose a game'>
        <ContainerButtons horizontal showsHorizontalScrollIndicator={false}>
          {games.map((game) => {
            const active = currentGame.game.type === game.type;
            return (
              <GameButton
                key={game.id}
                game={game}
                onPress={() => dispatch(setCurrentGame(game))}
                active={active}
              />
            )}
          )}
        </ContainerButtons>
        <Rules />
        <Decoration />
      </Description>
      <Gameboard />
    </Container>
  );
};

export default Game;
