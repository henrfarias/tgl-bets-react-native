import styled from 'styled-components/native';
import { View, Text, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../global/theme';
import { PropsCart } from '../../store/reducers/cart.reducer';

export const Overlay = styled(View)`
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.card};
  opacity: 0.8;
`;

export const Container = styled(View)`
  position: absolute;
  right: 20px;
  background-color: ${theme.colors.card};
  width: 245px;
  height: 100%;
  z-index: 20;
  opacity: 1;
  padding-bottom: 72px;
`;

export const CloseButton = styled(BorderlessButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  margin: 45px 0 30px;
  padding: 0 25px;
`;

export const Title = styled(Text)`
  font-size: 22px;
  font-family: ${theme.tipography.Ititle};
  text-transform: uppercase;
  color: ${theme.colors.strongText};
  margin-left: 12px;
`;

export const CartList = styled(FlatList as new () => FlatList<PropsCart>)`
  padding: 0 25px;
`;

export const TotalContent = styled(View)`
  margin: 30px 0;
  padding: 0 25px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TotalText = styled(View)`
  flex-direction: row;
`;

export const Total = styled(Text)`
  text-transform: uppercase;
  font-size: 15px;
  font-family: ${theme.tipography.text};
  color: ${theme.colors.strongText};
`

export const Strong = styled(Total)`
  font-family: ${theme.tipography.Ititle};
`
