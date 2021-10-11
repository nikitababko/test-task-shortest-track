import { GLOBALTYPES } from '../types';

const initialState = [];

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GLOBALTYPES.ADD_TODO:
      return [...payload];

    default:
      return state;
  }
};

export default todosReducer;
