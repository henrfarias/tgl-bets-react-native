import styled from 'styled-components/native';
import { View } from 'react-native';
import { theme } from '../../global/theme';

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.card};
  opacity: 0.9;
`;

export const Indicator = styled(View)`
`;