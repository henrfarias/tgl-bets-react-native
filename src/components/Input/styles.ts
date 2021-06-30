import styled from 'styled-components/native';
import { Animated, View, Text, TextInput } from 'react-native';
import { theme } from '../../global/theme';



export const Container = styled(View)`
  position: relative;
`; 

export const Label = styled(Animated.Text)`
  position: absolute;
  left: 26px;
  transform: translateY(-10px);
  color: ${theme.colors.text};
  font-family: ${theme.tipography.Ititle};
  font-size: 15px;
`;

export const InputText = styled(TextInput)`
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.border};
  height: 70.79px;
  padding-left: 26px;
`;

