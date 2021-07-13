import React, { useState, useRef } from 'react';
import { Animated, TextInputProps } from 'react-native';
import { Container, Label, InputText, PassButton } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../global/theme';

type InputProps = TextInputProps & {
  label: string;
  filled: string;
  password?: boolean;
};

const Input: React.FC<InputProps> = ({
  children,
  label,
  filled,
  password,
  ...rest
}) => {
  const floatLabel = useRef(new Animated.Value(35)).current;
  const [isFocused, setIsFocused] = useState(false);
  const [isHide, setIsHide] = useState(true);

  const focusHandler = () => {
    setIsFocused(true);
    Animated.timing(floatLabel, {
      toValue: 15,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const blurHandler = () => {
    setIsFocused(false);
    if (!filled) {
      Animated.timing(floatLabel, {
        toValue: 35,
        duration: 200,
        useNativeDriver: false,
      }).start();
      return;
    }
  };

  return (
    <Container>
      <Label style={{ top: floatLabel }}>{label}</Label>
      {password ? (
        <InputText
          onFocus={focusHandler}
          onBlur={blurHandler}
          isFocused={isFocused}
          secureTextEntry={isHide}
          {...rest}
        /> ) : (
          <InputText
          onFocus={focusHandler}
          onBlur={blurHandler}
          isFocused={isFocused}
          {...rest}
        />
      )}
      {password && (
        <PassButton onPress={() => setIsHide(!isHide)}>
          <Ionicons
            name='eye-outline'
            size={24}
            color={isHide ? theme.colors.button : theme.colors.primary}
          />
        </PassButton>
      )}
    </Container>
  );
};

export default Input;
