import API from '../../utils/api';
import { GLOBALTYPES } from '../types';

export const auth = (formData) => async (dispatch) => {
  try {
    const res = await API.getUsers();
    const filteredUser = res.filter(
      (user) => user.username === formData.username
    );

    if (filteredUser) {
      localStorage.setItem('user', JSON.stringify({ ...filteredUser[0] }));
      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
          isAuth: true,
          user: filteredUser[0],
        },
      });
    }

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        status: 'success',
        message: 'Вы успешно вошли',
      },
    });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        status: 'warning',
        message: error,
      },
    });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
          isAuth: true,
          user,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        status: 'warning',
        message: error,
      },
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: GLOBALTYPES.AUTH,
    payload: {
      isAuth: false,
    },
  });

  await localStorage.removeItem('user');

  dispatch({
    type: GLOBALTYPES.ALERT,
    payload: {
      status: 'success',
      message: 'Вы успешно вышли',
    },
  });
};
