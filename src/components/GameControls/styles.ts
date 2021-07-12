import styled from 'styled-components/native';
import { View, Text, TouchableHighlight } from 'react-native';
import { theme } from '../../global/theme';

type Props = {
  filled?: boolean;
};

export const Container = styled(View)`
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled(TouchableHighlight)<Props>`
  align-items: center;
  justify-content: center;
  height: 32px;
  background-color: ${({ filled }) =>
    filled ? theme.colors.primary : 'transparent'};
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
  padding: 0 8px;
`;

export const ButtonContent = styled(View)`
  flex-direction: row;
`;

export const ButtonText = styled(Text)<Props>`
  font-size: 13px;
  font-family: ${theme.tipography.title};
  color: ${({ filled }) =>
    filled ? theme.colors.background : theme.colors.primary};
`;
