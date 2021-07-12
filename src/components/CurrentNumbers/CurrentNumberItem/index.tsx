import React from 'react';
import { Container, Number, XIcon } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

type Props = RectButtonProps & {
  number: number;
  color: string;
}

const CurrentNumberItem: React.FC<Props> = ({ number, color, ...rest }) => {
  return (
    <Container color={color} {...rest}>
      <XIcon>
            <Ionicons name='close' size={10} color='#FFF' />
      </XIcon>
      <Number>{`${number}`.padStart(2, '0')}</Number>
    </Container>
  );
}

export default CurrentNumberItem;