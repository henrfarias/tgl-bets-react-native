import React from 'react';
import { Container, Title } from './styles'
import Header from '../../components/Header';
import { useAppSelector } from '../../store/hooks';
const Home: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const games = useAppSelector((state) => state.games);

  return (
     <Container>
       <Header />
       <Title>Home</Title>
       <Title>
          {user.username}
       </Title>
       <Title>
          {games.map((game) => game.type)}
       </Title>
     </Container>
  );
}

export default Home;