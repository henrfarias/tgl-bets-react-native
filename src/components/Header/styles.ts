import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import {
  TouchableWithoutFeedback,
  BorderlessButton,
} from 'react-native-gesture-handler';
import { theme } from '../../global/theme';

export const Container = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 83px;
  padding: 0 0 0 20px;
  background-color: ${theme.colors.card};
`;

export const HomeButton = styled(TouchableWithoutFeedback)``;

export const Title = styled(Text)`
  padding: 0 9px;
  font-size: 30px;
  font-family: ${theme.tipography.Ititle};
  color: ${theme.colors.strongText};
`;

export const Decoration = styled(View)`
  height: 6px;
  background-color: ${theme.colors.primary};
  border-radius: 10px;
  width: 100%;
`;

export const NavContainer = styled(View)`
  margin-right: 20px;
  flex-direction: row;
`;

export const NavButton = styled(BorderlessButton)`
  margin-left: 30px;
`;
