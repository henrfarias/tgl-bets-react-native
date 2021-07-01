import React from 'react';
import { Container, Title } from './styles';

import Card from '../Layout/Card';

const Form: React.FC<{ title: string }> = ({ children, title }) => {
  
  return (
     <Container>
       <Title>{title}</Title>
       <Card>
        {children}
       </Card>
     </Container>
  );
}

export default Form;
