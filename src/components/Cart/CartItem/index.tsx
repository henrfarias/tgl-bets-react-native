import React from 'react';
import {
  Container,
  NumbersOfBet,
  MoreInfo,
  Title,
  Decoration,
  Content,
  DeleteButton,
} from './styles';
import { LayoutAnimation, Platform, UIManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import arrayToString from '../../../helpers/arrayToString';
import dateFormated from '../../../helpers/dateFormated';
import { deleteItem, PropsCart } from '../../../store/reducers/cart.reducer';
import { theme } from '../../../global/theme';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

type Props = {
  bet: PropsCart;
}

const CartItem: React.FC<Props> = ({ bet }) => {
  const bets = useAppSelector((state) => state.cart.bets);
  const dispatch = useAppDispatch();

  const deleteHandler = () => {
    const targetIndex = bets.indexOf(bet);
    dispatch(deleteItem(targetIndex));
  }

  return (
    <Container>
      <Decoration color={bet.game.color} />
      <NumbersOfBet>{arrayToString(bet.numbers)}</NumbersOfBet>
      <Content>
        <MoreInfo>
          {dateFormated(bet.created_at)} -{' '}
          {`R$${bet.current_price.toFixed(2)}`.replace('.', ',')}
        </MoreInfo>
        <DeleteButton onPress={deleteHandler}>
          <Ionicons
            name='trash-outline'
            size={24}
            color={theme.colors.button}
          />
        </DeleteButton>
      </Content>
      <Title color={bet.game.color}>{bet.game.type}</Title>
    </Container>
  );
};

export default CartItem;
