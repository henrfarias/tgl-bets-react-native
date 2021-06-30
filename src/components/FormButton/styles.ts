import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/theme';

export const ButtonContainer = styled(View)`
  height: 110px;
`;

export const Button = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled(Text)`
  font-family: ${theme.tipography.Ititle};
  color: ${theme.colors.primary};
  font-size: 30px;
  margin-right: 18.29px;
`;