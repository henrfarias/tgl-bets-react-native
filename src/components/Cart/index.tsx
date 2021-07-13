import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { clearCart, toggle } from '../../store/reducers/cart.reducer';
import {
  Overlay,
  Container,
  CloseButton,
  Header,
  Title,
  CartList,
  TotalContent,
  Total,
  Strong,
  TotalText,
} from './styles';
import { theme } from '../../global/theme';
import { axios } from '../../services/axios';
import { useToast } from 'react-native-styled-toast';

import CartItem from './CartItem';
import FormButton from '../FormButton';
import EmptyCart from '../EmptyCart';

const Cart: React.FC = () => {
  const { bets, total } = useAppSelector((state) => state.cart);
  const bearer = useAppSelector((state) => state.bearer);
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const saveBetsOfCart = async () => {
    if (total < 30) {
      toast({ message: 'Preço mínimo é de R$ 30,00', intent: 'INFO' });
      return;
    }
    try {
      const savedBets = bets.map((bet) => ({
        game_id: bet.game.id,
        numbers: JSON.stringify(bet.numbers),
        current_price: bet.current_price,
      }));
      await axios.post(
        '/bets',
        {
          bets: savedBets,
        },
        {
          headers: { Authorization: `Bearer ${bearer}` },
        }
      );
      dispatch(clearCart());
      toast({ message: 'Apostas salvas com sucesso!' });
    } catch (error) {
      toast({
        message: 'Algo deu errado ao comprar suas apostas',
        intent: 'ERROR',
      });
    }
  };

  return (
    <>
      <Overlay />
      <Container>
        <CloseButton onPress={() => dispatch(toggle())}>
          <MaterialCommunityIcons
            name='close'
            size={30}
            color={theme.colors.primary}
          />
        </CloseButton>
        <Header>
          <MaterialCommunityIcons
            name='cart-outline'
            size={35}
            color={theme.colors.primary}
          />
          <Title>Cart</Title>
        </Header>
        {bets.length ? (
          <CartList>
            {bets.map((bet) => (
              <CartItem key={bet.created_at} bet={bet} />
            ))}
          </CartList>
        ) : (
          <EmptyCart />
        )}
        <TotalContent>
          <TotalText>
            <Strong>Cart</Strong>
            <Total> total:</Total>
          </TotalText>
          <Strong>{`R$ ${total.toFixed(2)}`.replace('.', ',')}</Strong>
        </TotalContent>
        <FormButton
          onPress={saveBetsOfCart}
          title='Save'
          style={{
            backgroundColor: theme.colors.border,
            borderBottomRightRadius: 13,
          }}
        />
      </Container>
    </>
  );
};

export default Cart;
