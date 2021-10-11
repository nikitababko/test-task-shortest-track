import React, { Component } from 'react';
import API from 'utils/api';
import AppRouter from './AppRouter';

import './index.scss';

class App extends Component {
  componentDidMount() {
    API.createUsers();
    if (!localStorage.getItem('todos')) {
      API.createTodos();
    }
  }

  render() {
    return (
      <div className="main">
        <AppRouter />
      </div>
    );
  }
}

export default App;
