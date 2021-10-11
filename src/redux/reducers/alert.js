import { GLOBALTYPES } from '../types';

const initialState = {};

const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GLOBALTYPES.ALERT:
      return payload;

    default:
      return state;
  }
};

export default alertReducer;
