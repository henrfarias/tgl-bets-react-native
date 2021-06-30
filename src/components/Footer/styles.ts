import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { theme } from '../../global/theme';

export const Container = styled(View)`
  position: relative;
  bottom: 0;
  margin-bottom: 22px;
  align-items: center;
  background-color: ${theme.colors.background};
`;

export const TextFooter = styled(Text)`
  font-size: 15px;
  font-family: ${theme.tipography.text};
  color: ${theme.colors.strongText};
`;