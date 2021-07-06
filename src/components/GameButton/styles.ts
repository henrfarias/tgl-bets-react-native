import styled from 'styled-components/native';
import { Text, TouchableHighlight, View } from 'react-native';
import { theme } from '../../global/theme';

interface Props {
  color: string;
  active?: boolean;
}

export const Button = styled(TouchableHighlight)<Props>`
  border: 2px solid ${({ color }) => color};
  border-radius: 100px;
  background-color: ${(props) => props.active ? props.color : 'transparent'};
  align-items: center;
  justify-content: center;
  width: 101px;
  height: 30px;
  margin-right: 9px;
`;

export const ButtonContent = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Type = styled(Text)<Props>`
  font-family: ${theme.tipography.Ititle};
  font-size: 14px;
  color: ${(props) => props.active ? '#FFF' : props.color};
`;

export const XIndicator = styled(View)`
  position: absolute;
  top: -3px;
  right: 5px;
`;