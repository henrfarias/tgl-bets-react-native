import React from 'react';
import {
  Container,
  ButtonsContainer,
  Button,
  ButtonText,
  ButtonContent,
} from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/theme';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import CurrentNumbers from '../CurrentNumbers';
import {
  clearGame,
  completeGame,
} from '../../store/reducers/currentGame.reducer';
import { addToCart, PropsCart } from '../../store/reducers/cart.reducer';
import sortNumbers from '../../helpers/sortNumbers';

const GameControls: React.FC = () => {
  const currentGame = useAppSelector((state) => state.current_game);
  const dispatch = useAppDispatch();

  const addCartHandler = () => {
    const numbers = [...currentGame.numbers]
    const bet: PropsCart = {
      game: currentGame.game,
      numbers: sortNumbers(numbers),
      current_price: currentGame.game.price,
      created_at: `${new Date().toISOString()}`,
    };
    dispatch(addToCart(bet));
    dispatch(clearGame());
  };

  return (
    <Container>
      <CurrentNumbers />
      <ButtonsContainer>
        <Button
          underlayColor={theme.colors.primary}
          onPress={() => dispatch(completeGame())}
        >
          <ButtonText>Complete game</ButtonText>
        </Button>
        <Button
          underlayColor={theme.colors.primary}
          onPress={() => dispatch(clearGame())}
        >
          <ButtonText>Clear game</ButtonText>
        </Button>
        <Button
          filled
          underlayColor={theme.colors.primary}
          onPress={addCartHandler}
        >
          <ButtonContent>
            <MaterialCommunityIcons
              name='cart-outline'
              size={20}
              color={theme.colors.background}
              style={{ marginRight: 10 }}
            />
            <ButtonText filled>Add to cart</ButtonText>
          </ButtonContent>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default GameControls;
