import API from 'utils/api';
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
        payload: filteredUser[0],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));

    console.log(user);

    if (user) {
      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
          ...user,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
