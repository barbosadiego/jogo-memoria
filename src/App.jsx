import React from 'react';
import './App.scss';
import Grid from './components/grid/Grid';

const App = () => {
  return (
    <section className="container">
      <h1>jogo da memória</h1>
      <Grid />
    </section>
  );
};

export default App;
