import { combineReducers } from 'redux';

const reducers = ['auth', 'todos', 'alert'];

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default;
    return initial;
  }, {})
);
