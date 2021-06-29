import styled from 'styled-components/native';
import { View, Text, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../global/theme';

export const Container = styled(View)`
  position: relative;
`; 

export const Label = styled(Text)`
  position: absolute;
  top: 50%;
  left: 26px;
  transform: translateY(-10px);
  color: ${theme.colors.text};
  font-family: ${theme.tipography.title};
  font-size: 15px;
`;

export const InputText = styled(TextInput)`
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.border};
  height: 70.79px;
  padding-left: 26px;
`;

export const Link = styled(BorderlessButton)``;