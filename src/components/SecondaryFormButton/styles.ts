import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../global/theme';

type Props = {
  isBack: boolean;
}

export const Container = styled(View)`
  height: 40px; 
`;

export const Button = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled(Text)<Props>`
  font-family: ${theme.tipography.Ititle};
  font-size: 30px;
  color: ${theme.colors.strongText};
  padding-right: ${props => props.isBack ? '0' : '17px'};
  padding-left: ${props => props.isBack ? '17px' : '0'};
`;