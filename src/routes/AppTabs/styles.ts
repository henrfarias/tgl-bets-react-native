import styled from 'styled-components/native';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

type Props = BottomTabBarButtonProps

export const ButtonContainer = styled(View)`
  position: relative;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const MainButton = styled(RectButton)<any>`
  position: absolute;
  top: -35px;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;