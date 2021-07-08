import styled from 'styled-components';
import { View, ScrollView } from 'react-native';
import { theme } from '../../global/theme';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  background-color: ${theme.colors.background};
`;

export const Decoration = styled(View)`
  align-self: center;
  height: 6px;
  width: 36px;
  background-color: ${theme.colors.button};
  border-radius: 6px;
  margin-top: 5px;
`;

export const ContainerButtons = styled(ScrollView)`
  margin-top: 15px;
  width: 100%;
  margin-bottom: 4px;
`;