import styled from 'styled-components/native';
import { View } from 'react-native';
import { theme } from '../../global/theme';

export const Container = styled(View)`
  position: absolute;
  top: 0;
  padding: 26px 20px 0;
  width: 100%;
  opacity: 0.95;
  z-index: 10;
  background-color: ${theme.colors.background};
`;