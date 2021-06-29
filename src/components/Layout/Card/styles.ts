import styled from 'styled-components/native';
import { View } from 'react-native';
import { theme } from '../../../global/theme';

export const Container = styled(View)`
  width: 100%;
  border-radius: 12px;
  background-color: ${theme.colors.card};
`;