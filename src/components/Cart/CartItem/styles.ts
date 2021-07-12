import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { theme } from '../../../global/theme';

type Props ={ 
  color: string;
}

export const Container = styled(View)`
  position: relative;
  justify-content: center;
  padding: 4px 15px;
  margin-bottom: 10px;
`;

export const Decoration = styled(View)<Props>`
  position: absolute;
  left: 0;
  border-radius: 6px;
  background-color: ${({color}) => color};
  width: 6px;
  height: 100%;
`;

export const NumbersOfBet = styled(Text)`
  font-family: ${theme.tipography.Ititle};
  font-size: 12px;
  color: ${theme.colors.description};
  margin-bottom: 2px;
`;

export const MoreInfo = styled(Text)`
  font-family: ${theme.tipography.text};
  font-size: 12px;
  color: ${theme.colors.description};
  margin-bottom: 2px;
`;

export const Title = styled(Text)<Props>`
  font-family: ${theme.tipography.Ititle};
  font-size: 16px;
  color: ${({ color }) => color};
`;