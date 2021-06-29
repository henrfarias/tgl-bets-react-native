import styled from 'styled-components';
import { View } from 'react-native';
import { theme } from '../../../global/theme'; 

export const Container = styled(View)`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 0 35px;
`;