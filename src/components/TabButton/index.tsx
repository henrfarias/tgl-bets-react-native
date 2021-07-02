import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Container, Label, Highlight } from './styles';

type TabButtonProps = {
  iconName: 'home-outline' | 'person-outline';
  label: string;
  focused?: boolean;
  color: string;
};

const TabButton: React.FC<TabButtonProps> = ({
  label,
  iconName,
  focused,
  color,
}) => {
  return (
    <Container>
      {focused && <Highlight />}
      <Ionicons name={iconName} size={24} color={color} />
      <Label focused={focused}>{label}</Label>
    </Container>
  );
};

export default TabButton;
