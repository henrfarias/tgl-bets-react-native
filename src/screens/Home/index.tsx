import React, { useCallback, useEffect, useState } from 'react';
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
import { IBet } from '../../types/IBet';

const Home: React.FC = () => {
  const [currentFilters, setCurrentFilters] = useState<string[]>([]);
  const [filteredBets, setFilteredBets] = useState<IBet[]>([]);
  const user = useAppSelector((state) => state.user);
  const bearer = useAppSelector((state) => state.bearer);
  const games = useAppSelector((state) => state.games);
  const dispatch = useAppDispatch();

  const filtersHandler = (type: string) => {
    if (currentFilters.includes(type)) {
      const attFilters = currentFilters.filter((filter) => filter !== type);      
      setCurrentFilters(attFilters);
      return;
    }
    setCurrentFilters((prevState) => {
      return [...prevState, type];
    });
  };

  useFocusEffect(
    useCallback(() => {
      const refetch = async () => {
        const getUser = await axios.get('/users', {
          headers: { Authorization: `Bearer ${bearer}` },
        });
        const userInfo: IUser = getUser.data;
        dispatch(userLoggedIn(userInfo));
      };

      refetch();
    }, [])
  );

  useEffect(() => {
    const bets =
      user.bets?.filter((bet) => {
        if (!currentFilters.length) return true;
        if (currentFilters.includes(bet.game.type)) {
          return true;
        }
        return false;
      }) || [];
    setFilteredBets(bets);
  }, [currentFilters]);

  return (
    <Container>
      <Header />
      <Description title='Recent games' label='Filters'>
        <ContainerButtons horizontal showsHorizontalScrollIndicator={false}>
          {games.map((game) => {
            const active = currentFilters.includes(game.type);
            return (
              <GameButton
                active={active}
                key={game.id}
                game={game}
                onPress={() => filtersHandler(game.type)}
                filter
              />
          )})}
        </ContainerButtons>
      </Description>
      <BetsList
        data={filteredBets}
        renderItem={BetCard}
        keyExtractor={(bet) => bet.id.toString()}
        contentContainerStyle={{ paddingBottom: 210 }}
      />
    </Container>
  );
};

export default Home;
