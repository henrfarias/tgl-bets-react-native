import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Container, Button, Title } from './styles';
import { theme } from '../../global/theme';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  isBack?: boolean;
};

const SecondaryFormButton: React.FC<ButtonProps> = ({
  title,
  isBack = false,
}) => {
  return (
    <Container>
      <Button>
        {isBack && (
          <AntDesign
            name='arrowleft'
            size={24}
            color={theme.colors.strongText}
          />
        )}
        <Title isBack={isBack}>{title}</Title>
        {!isBack && (
          <AntDesign
            name='arrowright'
            size={24}
            color={theme.colors.strongText}
          />
        )}
      </Button>
    </Container>
  );
};

export default SecondaryFormButton;
