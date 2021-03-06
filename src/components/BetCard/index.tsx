import React from 'react';
import { Container, NumbersOfBet, MoreInfo, Title, Decoration } from './styles';
import { ListRenderItemInfo } from 'react-native';
import { IBet } from '../../types/IBet';

import arrayToString from '../../helpers/arrayToString';
import dateFormated from '../../helpers/dateFormated';
import { PropsCart } from '../../store/reducers/cart.reducer';

type Props = ListRenderItemInfo<IBet> | ListRenderItemInfo<PropsCart>;

const BetCard: React.FC<Props> = (bet: Props) => {
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

export default BetCard;
