import { GLOBALTYPES } from '../types';

const initialState = {};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GLOBALTYPES.AUTH:
      return {
        isAuth: payload.isAuth,
        user: payload.user,
      };

    default:
      return state;
  }
};

export default authReducer;
