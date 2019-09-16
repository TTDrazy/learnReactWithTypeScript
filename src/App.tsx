import React from 'react';
import './App.css';
import Type from './learn/Type';
import HighTypes from './learn/HighTypes';
import Variable from './learn/Variable';
import Interface from './learn/Interface';
import Class from './learn/Class';
import User from './pages/User';

const App: React.FC = () => {
  return (
    <div className="App">
      <Type></Type>
      <HighTypes></HighTypes>
      <Variable></Variable>
      <Interface></Interface>
      <Class></Class>
      <User></User>
    </div>
  );
}

export default App;
