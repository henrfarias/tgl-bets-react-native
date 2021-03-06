import styled from 'styled-components/native';
import { Animated, View, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/theme';

type Props = {
  isFocused: boolean;
};

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

export const InputText = styled(TextInput)<Props>`
  border-bottom-width: 2px;
  border-bottom-color: ${(props) =>
    props.isFocused ? theme.colors.primary : theme.colors.border};
  height: 70.79px;
  padding-left: 26px;
`;

export const PassButton = styled(RectButton)`
  position: absolute;
  right: 20px;
  top: 22px;
  z-index: 10;
`;
