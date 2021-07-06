import React from 'react';
import {
  Container,
  Content,
  Title,
  Label,
  ContainerButtons,
  BetsList,
} from './styles';
import { useAppSelector } from '../../store/hooks';

import Header from '../../components/Header';
import Description from '../../components/Description';
import GameButton from '../../components/GameButton';
import BetCart from '../../components/BetCart';

const Home: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const games = useAppSelector((state) => state.games);

  return (
    <Container>
      <Header />
      <Content>
        <Description>
          <Title>Recent games</Title>
          <Label>Filters</Label>
          <ContainerButtons horizontal showsHorizontalScrollIndicator={false}>
            {games.map((game) => (
              <GameButton key={game.id} game={game} />
            ))}
          </ContainerButtons>
        </Description>
        <BetsList
          data={user.bets}
          renderItem={BetCart}
          keyExtractor={(bet) => bet.id.toString()}
          contentContainerStyle={{ paddingBottom: 180}}
        />
      </Content>
    </Container>
  );
};

export default Home;
