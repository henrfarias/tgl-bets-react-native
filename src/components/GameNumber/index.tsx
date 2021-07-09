import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Number } from './styles';

type Props = RectButtonProps & {
  index: number;
  color: string;
  checked: boolean;
}

const GameNumber: React.FC<Props> = ({ index, color, checked, ...rest }) => {
  return (
     <Container checked={checked} color={color} {...rest}>
       <Number>{`${index}`.padStart(2, '0')}</Number>
     </Container>
  );
}

export default React.memo(GameNumber);