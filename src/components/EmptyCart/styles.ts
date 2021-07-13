import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { theme } from '../../global/theme';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Warn = styled(Text)`
  color: ${theme.colors.text};
  font-size: 16px;
  font-family: ${theme.tipography.Itext};
`;