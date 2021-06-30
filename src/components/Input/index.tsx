import React, { useState, useRef } from 'react';
import {
  Animated,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputProps,
} from 'react-native';
import { Container, Label, InputText } from './styles';

type InputProps = TextInputProps & {
  label: string;
};

const Input: React.FC<InputProps> = ({ children, label, ...rest }) => {
  const floatLabel = useRef(new Animated.Value(35)).current;
  const [isFilled, setIsFilled] = useState(false);

  const focusHandler = () => {
    Animated.timing(floatLabel, {
      toValue: 15,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const blurHandler = () => {
    if (!isFilled) {
      Animated.timing(floatLabel, {
        toValue: 35,
        duration: 200,
        useNativeDriver: false,
      }).start();
      return;
    }
  };

  const changeHandler = (text: string) => {
    if (text) {
      setIsFilled(true);
      return;
    }
    setIsFilled(false);
  };

  return (
    <Container>
      <Label style={{ top: floatLabel }}>{label}</Label>
      <InputText
        onFocus={focusHandler}
        onBlur={blurHandler}
        onChangeText={changeHandler}
        {...rest}
      />
    </Container>
  );
};

export default Input;
