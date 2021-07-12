import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../../global/theme';

type Props = {
  color: string;
};

export const Container = styled(RectButton)<Props>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  background-color: ${({color}) => color};
`;

export const Number = styled(Text)`
  color: ${theme.colors.card};
  font-size: 13px;
  font-family: ${theme.tipography.Ititle};
`;

export const XIcon = styled(View)`
  position: absolute;
  top: 5px;
  right: 5px;
`;