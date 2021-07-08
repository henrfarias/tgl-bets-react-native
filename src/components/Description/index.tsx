import React from 'react';
import { IGame } from '../../types/IGames';
import { Container, Content, Title, Label } from './styles';

import GameButton from '../GameButton';

type Props = {
  title: string;
  label: string;
  filter?: boolean;
};

const Description: React.FC<Props> = ({
  children,
  title,
  label,
  filter = false,
}) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Label>{label}</Label>
        {children}
      </Content>
    </Container>
  );
};

export default Description;
