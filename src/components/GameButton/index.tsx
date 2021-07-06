import React from 'react';
import { TouchableHighlightProps } from 'react-native';
import { Button, Type } from './styles';
import { IGame } from '../../types/IGames';

type ButtonProps = TouchableHighlightProps & {
  game: IGame;
  active?: boolean;
}

const GameButton: React.FC<ButtonProps> = ({
  game,
  active = false,
  ...rest
}) => {
  return (
    <Button color={game.color} active={active} {...rest}>
      <Type color={game.color}>{game.type}</Type>
    </Button>
  );
};

export default GameButton;
