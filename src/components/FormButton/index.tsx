import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'
import { ButtonContainer, Button, Title } from './styles';
import { theme } from '../../global/theme';

type ButtonProps = RectButtonProps & {
  title: string;
};

const FormButton: React.FC<ButtonProps> = ({ children, title, ...rest }) => {
  return (
    <ButtonContainer>
      <Button {...rest}>
        <Title>
          {title}
        </Title>
        <AntDesign 
          name='arrowright'
          size={24}
          color={theme.colors.primary}
        />
      </Button>
    </ButtonContainer>
  );
};

export default FormButton;
