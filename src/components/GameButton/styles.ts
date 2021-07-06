import styled from 'styled-components/native';
import { Text, TouchableHighlight } from 'react-native';
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
`;

export const Type = styled(Text)<Props>`
  font-family: ${theme.tipography.Ititle};
  font-size: 14px;
  color: ${(props) => props.active ? '#FFF' : props.color};
`;
