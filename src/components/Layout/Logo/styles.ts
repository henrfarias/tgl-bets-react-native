import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { theme } from '../../../global/theme';

export const Container = styled(View)`
  margin-top: 80px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-family: ${theme.tipography.title}; 
  font-size: 44px;
  color: ${theme.colors.strongText};
`;

export const Decoration = styled(View)`
  height: 7px;
  width: 107px;
  background-color: ${theme.colors.primary};
  border-radius: 6px;
`;