import styled from 'styled-components/native';
import { View, Text, ScrollView } from 'react-native';
import { theme } from '../../global/theme';

export const Container = styled(View)`
  position: relative;
  width: 100%;
`;

export const Content = styled(View)`
  position: absolute;
  top: 0;
  padding: 26px 20px 0;
  width: 100%;
  opacity: 0.95;
  z-index: 10;
  background-color: ${theme.colors.background};
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
  color: ${theme.colors.description};
  margin-top: 15px; 
`;
