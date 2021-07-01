import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { theme } from '../../../global/theme';

export const Container = styled(Animated.View)`
  width: 100%;
  border-radius: 12px;
  background-color: ${theme.colors.card};
  overflow: hidden;
  shadow-color: #000;
  elevation: 10;
`;