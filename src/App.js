import React from 'react';
import './style/App.css';
import Menu from './components/Menu';
import Vue from './components/Vue';
import * as termes from './components/termes';

function App() {

  return (
    <>
      <Menu/>
      <main>
        <Vue vue={termes.FACE}id={termes.FACE}></Vue>
        <Vue vue={termes.GAUCHE}id={termes.GAUCHE}></Vue>
        <Vue vue={termes.HAUT}id={termes.HAUT}></Vue>
        <Vue vue={termes.TRIDI}id={termes.TRIDI}></Vue>
      </main>
    </>
  );
}

export default App;
