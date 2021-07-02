import React from 'react';
import { Container, Title } from './styles'
import Header from '../../components/Header';
const Home: React.FC = () => {
  return (
     <Container>
       <Header />
       <Title>Home</Title>
     </Container>
  );
}

export default Home;