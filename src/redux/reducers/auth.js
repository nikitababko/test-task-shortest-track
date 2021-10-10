import { GLOBALTYPES } from '../types';

const initialState = {};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GLOBALTYPES.AUTH:
      return {
        isAuth: true,
        user: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
