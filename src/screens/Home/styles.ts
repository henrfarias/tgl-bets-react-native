import styled from 'styled-components';
import { View, ScrollView, FlatList } from 'react-native';
import { theme } from '../../global/theme';
import { IBet } from '../../types/IBet';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  background-color: ${theme.colors.background};
`;

export const BetsList = styled(FlatList as new () => FlatList<IBet>)`
  padding-top: 150px;
  width: 100%;
`;

export const ContainerButtons = styled(ScrollView)`
  margin-top: 15px;
  width: 100%;
  margin-bottom: 4px;
`;
