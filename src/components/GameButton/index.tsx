import React from 'react';
import { TouchableHighlightProps } from 'react-native';
import { Button, ButtonContent, Type, XIndicator } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { IGame } from '../../types/IGames';

type ButtonProps = TouchableHighlightProps & {
  game: IGame;
  active?: boolean;
};

const GameButton: React.FC<ButtonProps> = ({
  game,
  active = false,
  ...rest
}) => {
  return (
    <Button
      color={game.color}
      active={active}
      underlayColor={game.color}
      {...rest}
    >
      <ButtonContent>
        {active && (
          <XIndicator>
            <Ionicons name='close' size={10} color='#FFF' />
          </XIndicator>
        )}
        <Type color={game.color} active={active}>
          {game.type}
        </Type>
      </ButtonContent>
    </Button>
  );
};

export default GameButton;
