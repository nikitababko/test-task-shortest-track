import { combineReducers } from 'redux';

const reducers = ['auth', 'todos'];

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default;
    return initial;
  }, {})
);
