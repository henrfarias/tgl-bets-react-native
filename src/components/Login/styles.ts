import styled from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';
import { theme } from '../../global/theme';

export const Container = styled(View)`
  align-items: center;
`;

export const Link = styled(TouchableOpacity)`
  align-self: flex-end;
  margin: 20.52px 31px 0 0;
  padding: 4px 0;
`;

export const Text = styled.Text`
  color: ${theme.colors.button};
  font-size: 14px;
  font-family: ${theme.tipography.Itext};
`;

export const ContainerButton = styled(View)`
  margin-top: 38px;
  margin-bottom: 128px;
`;

