import React from 'react';
import './App.css';
import Type from './learn/Type';
import HighTypes from './learn/HighTypes';
import Variable from './learn/Variable';
import Interface from './learn/Interface';
import Class from './learn/Class';

const App: React.FC = () => {
  return (
    <div className="App">
      <Type></Type>
      <HighTypes></HighTypes>
      <Variable></Variable>
      <Interface></Interface>
      <Class></Class>
    </div>
  );
}

export default App;
