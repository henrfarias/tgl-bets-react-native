import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { theme } from '../../global/theme';

type Props = {
  focused?: boolean;
};

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Highlight = styled(View)`
  position: absolute;
  top: 0;
  height: 4px;
  width: 30px;
  border-radius: 6px;
  background-color: ${theme.colors.primary};
`;

export const Label = styled(Text)<Props>`
  font-family: ${({ focused }) =>
    focused ? theme.tipography.Ititle : theme.tipography.Itext};
  font-size: 14px;
  color: ${({ focused }) => focused ? theme.colors.strongText : theme.colors.button}
`;
