import React, { Component } from 'react';
import AppRouter from './AppRouter';

import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="main">
        <AppRouter />
      </div>
    );
  }
}

export default App;
