import styled from 'styled-components';
import { ScrollView } from 'react-native';
import { theme } from '../../../global/theme'; 

export const Container = styled(ScrollView)`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 0 35px;
`;