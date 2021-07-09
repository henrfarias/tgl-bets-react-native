import styled from 'styled-components/native';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/theme';

type Props = {
  checked: boolean;
  color: string;
};

export const Container = styled(RectButton)<Props>`
  width: 59px;
  height: 59px;
  border-radius: 59px;
  background-color: ${({ color, checked }) =>
    checked ? color : theme.colors.number};
  justify-content: center;
  align-items: center;
  margin-bottom: 9px;
`;

export const Number = styled(Text)`
  color: ${theme.colors.card};
  font-size: 18px;
  font-family: ${theme.tipography.Ititle};
`;
