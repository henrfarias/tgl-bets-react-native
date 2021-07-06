import React from 'react';
import { Container, Content, Title, Label, ContainerButtons } from './styles';
import Header from '../../components/Header';
import { useAppSelector } from '../../store/hooks';

import Description from '../../components/Description';
import GameButton from '../../components/GameButton';

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
          <ContainerButtons>
            {games.map((game) => (<GameButton key={game.id} game={game} />))}
          </ContainerButtons>
        </Description>
      </Content>
    </Container>
  );
};

export default Home;
