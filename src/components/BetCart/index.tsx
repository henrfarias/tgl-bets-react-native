import React from 'react';
import { Container, NumbersOfBet, MoreInfo, Title, Decoration } from './styles';
import { ListRenderItemInfo } from 'react-native';
import { IBet } from '../../types/IBet';

import arrayToString from '../../helpers/arrayToString';
import dateFormated from '../../helpers/dateFormated';

type Props = ListRenderItemInfo<IBet>;

const BetCart = (bet: Props) => {
  return (
    <Container>
      <Decoration color={bet.item.game.color} />
      <NumbersOfBet>{arrayToString(bet.item.numbers)}</NumbersOfBet>
      <MoreInfo>
        {dateFormated(bet.item.created_at)} -{' '}
        {`R$${bet.item.current_price.toFixed(2)}`.replace('.', ',')}
      </MoreInfo>
      <Title color={bet.item.game.color} >{bet.item.game.type}</Title>
    </Container>
  );
};

export default BetCart;
