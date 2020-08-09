import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Text>Home sweet home screen :D</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 22 }}>vitorlimadev</Text>
    </Container>
  );
};

export default Home;
