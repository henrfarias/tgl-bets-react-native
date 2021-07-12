import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Container, BetsList, ContainerButtons } from './styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import Header from '../../components/Header';
import Description from '../../components/Description';
import BetCard from '../../components/BetCard';
import GameButton from '../../components/GameButton';
import { axios } from '../../services/axios';
import { IUser } from '../../types/IUser';
import { userLoggedIn } from '../../store/reducers/user.reducer';

const Home: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const bearer = useAppSelector((state) => state.bearer);
  const games = useAppSelector((state) => state.games);
  const dispatch = useAppDispatch();

  useFocusEffect(useCallback(() => {
    const refetch = async () => {
      const getUser = await axios.get('/users', {
        headers: { Authorization: `Bearer ${bearer}` },
      });
      const userInfo: IUser = getUser.data;
      console.log('refetch');
      dispatch(userLoggedIn(userInfo));
    }

    refetch();
  }, []))

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
        renderItem={BetCard}
        keyExtractor={(bet) => bet.id.toString()}
        contentContainerStyle={{ paddingBottom: 210 }}
      />
    </Container>
  );
};

export default Home;
