import React from 'react';
import { Container, BetsList, ContainerButtons } from './styles';
import { useAppSelector } from '../../store/hooks';

import Header from '../../components/Header';
import Description from '../../components/Description';
import BetCart from '../../components/BetCart';
import GameButton from '../../components/GameButton';

const Home: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const games = useAppSelector((state) => state.games);

  return (
    <Container>
      <Header />
      <Description title='Recent games' label='Filters'>
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
        contentContainerStyle={{ paddingBottom: 210 }}
      />
    </Container>
  );
};

export default Home;
