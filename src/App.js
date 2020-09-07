import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
// import {Greet} from './components/Greet' named import

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
