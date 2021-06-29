import styled from 'styled-components';
import { View, Text } from 'react-native';
import { theme } from '../../global/theme';

export const Container = styled(View)`
  width: 100%;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 35px;
  font-family: ${theme.tipography.title};
  color: ${theme.colors.strongText};
  margin-bottom: 26px;
`;