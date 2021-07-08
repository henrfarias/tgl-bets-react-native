import React from 'react';
import { Container, Rule, Normal, Strong, SubTitle } from './styles';

const Rules: React.FC = () => {
  return (
    <Container>
      <SubTitle>Fill your bet</SubTitle>
      <Rule>
        <Normal>Mark as </Normal>
        <Strong>many numbers</Strong>
        <Normal> as you want up to a </Normal> 
        <Strong>maximum of 50</Strong>
        <Normal>. Win by hitting </Normal>
        <Strong>15, 16, 17, 18, 19, 20</Strong>
        <Normal> or </Normal> <Strong>none</Strong>
        <Normal> of the </Normal>
        <Strong>20 numbers drawn.</Strong>
      </Rule>
    </Container>
  );
};

export default Rules;
