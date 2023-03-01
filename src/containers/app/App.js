import './App.css';
import React from 'react';
import { All } from '../all/All';
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <Router>
      <All />
    </Router>
  );
}

export default App;
