import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, Label,  InputText } from './styles';

type InputProps = TextInputProps & {
  label: string;
}

const Input: React.FC<InputProps> = ({ children, label, ...rest}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText />
    </Container>
  );
}

export default Input;