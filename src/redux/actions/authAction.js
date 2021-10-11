import API from '../../utils/api';
import { GLOBALTYPES } from '../types';

export const auth = (formData) => async (dispatch) => {
  try {
    // dispatch({
    //   type: GLOBALTYPES.ALERT,
    //   payload: {
    //     loading: true,
    //   },
    // });
    const res = await API.getUsers();
    const filteredUser = res.filter(
      (user) => user.username === formData.username
    );

    if (filteredUser) {
      localStorage.setItem('user', JSON.stringify({ ...filteredUser[0] }));
      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: filteredUser[0],
      });
    }

    // dispatch({
    //   type: GLOBALTYPES.ALERT,
    //   payload: {
    //     success: res.data.message,
    //   },
    // });
  } catch (error) {
    // dispatch({
    //   type: GLOBALTYPES.ALERT,
    //   payload: {
    //     error: error.response.data.message,
    //   },
    // });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    // dispatch({
    //   type: GLOBALTYPES.ALERT,
    //   payload: {
    //     loading: true,
    //   },
    // });

    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
          ...user,
        },
      });
    }

    // dispatch({
    //   type: GLOBALTYPES.ALERT,
    //   payload: {
    //     success: res.data.message,
    //   },
    // });
  } catch (error) {
    // dispatch({
    //   type: GLOBALTYPES.ALERT,
    //   payload: {
    //     error: error.response.data.message,
    //   },
    // });
  }
};
