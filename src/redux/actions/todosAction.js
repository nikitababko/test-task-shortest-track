import API from '../../utils/api';
import { GLOBALTYPES } from '../types';

export const addTodo = (todo, user) => async (dispatch) => {
  try {
    // dispatch({
    //   type: GLOBALTYPES.ALERT,
    //   payload: {
    //     loading: true,
    //   },
    // });

    const res = await API.getTodos();

    let arr = [...res];
    arr.push({
      id: new Date().valueOf(),
      title: todo.title,
      description: todo.description,
      completed: false,
      date: new Date().toLocaleString(),
      userId: user.id,
    });

    if (res) {
      localStorage.setItem('todos', JSON.stringify(arr));
    } else {
      localStorage.setItem(
        'todos',
        JSON.stringify({
          id: new Date().valueOf(),
          title: todo.title,
          description: todo.description,
          completed: false,
          date: new Date().toLocaleString(),
          userId: user.id,
        })
      );
    }

    dispatch({
      type: GLOBALTYPES.ADD_TODO,
      payload: arr,
    });

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

export const getTodos = () => async (dispatch) => {
  try {
    // dispatch({
    //   type: GLOBALTYPES.ALERT,
    //   payload: {
    //     loading: true,
    //   },
    // });

    const res = await API.getTodos();

    dispatch({
      type: GLOBALTYPES.ADD_TODO,
      payload: res,
    });
  } catch (error) {
    // dispatch({
    //   type: GLOBALTYPES.ALERT,
    //   payload: {
    //     error: error.response.data.message,
    //   },
    // });
  }
};
