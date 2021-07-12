import React from 'react';
import { Container, Decoration, ContainerButtons, CartButton } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCurrentGame } from '../../store/reducers/currentGame.reducer';

import Header from '../../components/Header';
import Description from '../../components/Description';
import Rules from '../../components/Rules';
import GameButton from '../../components/GameButton';
import Gameboard from '../../components/Gameboard';
import GameControls from '../../components/GameControls';
import { theme } from '../../global/theme';
import { toggle } from '../../store/reducers/cart.reducer';
import Cart from '../../components/Cart';

const Game: React.FC = () => {
  const games = useAppSelector((state) => state.games);
  const user = useAppSelector((state) => state.user);
  const currentGame = useAppSelector((state) => state.current_game);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Header>
        <CartButton onPress={() => dispatch(toggle())}>
          <MaterialCommunityIcons
            name='cart-outline'
            size={24}
            color={theme.colors.primary}
          />
        </CartButton>
      </Header>
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
            );
          })}
        </ContainerButtons>
        {currentGame.numbers.length ? <GameControls /> : <Rules />}
        <Decoration />
      </Description>
      <Gameboard />
      {cart.openned && <Cart />}
    </Container>
  );
};

export default Game;
