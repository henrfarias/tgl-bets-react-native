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
import { useAppDispatch } from '../../store/hooks';

import CurrentNumbers from '../CurrentNumbers';
import { clearGame, completeGame } from '../../store/reducers/currentGame.reducer';

const GameControls: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <CurrentNumbers />
      <ButtonsContainer>
        <Button underlayColor={theme.colors.primary} onPress={() => dispatch(completeGame())}>
          <ButtonText>Complete game</ButtonText>
        </Button>
        <Button underlayColor={theme.colors.primary} onPress={() => dispatch(clearGame())}>
          <ButtonText>Clear game</ButtonText>
        </Button>
        <Button filled underlayColor={theme.colors.primary}>
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
