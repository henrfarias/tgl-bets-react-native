import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { theme } from '../../global/theme';

export const Container = styled(View)`
  width: 100%;
  margin-top: 10px;
`;

export const SubTitle = styled(Text)`
  font-size: 17px;
  font-family: ${theme.tipography.Ititle};
  color: ${theme.colors.description};
  width: 100%;
`;

export const Rule = styled(Text)`
  margin-top: 5px;
  line-height: 20px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Normal = styled(Text)`
  font-size: 14px;
  font-family: ${theme.tipography.Itext};
  color: ${theme.colors.description};
`;

export const Strong = styled(Normal)`
  font-family: ${theme.tipography.Ititle};
`;
