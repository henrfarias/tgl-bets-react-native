import styled from 'styled-components';
import { Text, View, ScrollView } from 'react-native';
import { theme } from '../../global/theme';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  background-color: ${theme.colors.background};
`;

export const Content = styled(View)`
  position: relative;
  width: 100%;
`;

export const Title = styled(Text)`
  font-family: ${theme.tipography.Ititle};
  font-size: 22px;
  text-transform: uppercase;
  color: ${theme.colors.strongText};
`;

export const Label = styled(Text)`
  font-family: ${theme.tipography.Itext};
  font-size: 17px;
  color: #868686;
  margin-top: 15px; 
`;

export const ContainerButtons = styled(ScrollView)`
  width: 100%;
  background-color: ${theme.colors.primary};
  flex-direction: row;
`;