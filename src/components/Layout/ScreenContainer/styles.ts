import styled from 'styled-components';
import { ScrollView, Text, View } from 'react-native';
import { theme } from '../../../global/theme'; 

export const Container = styled(ScrollView)`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 0 35px;
`;

export const TextFooter = styled(Text)`
  font-family: ${theme.tipography.text};
  font-size: 15px;
  flex: 1;
  align-self: center;
  margin-bottom: 22px;
  color: ${theme.colors.strongText};
`;

export const Footer = styled(View)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;