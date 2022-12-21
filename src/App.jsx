import React from 'react';
import styled from 'styled-components';
import Container from './components/Container';
import Grid from './components/Grid';

const App = () => {
  return (
    <>
      <Container>
        <Title>Jogo da Memória</Title>
        <Grid />
      </Container>
    </>
  );
};

export default App;

const Title = styled.h1`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: clamp(1.5rem, 5vw, 5rem);
  text-align: center;
`;
