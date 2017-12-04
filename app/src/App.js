import React, { Component } from 'react';
import './App.css';

import Calculator from './components/Calculator/Calculator';

export default class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}