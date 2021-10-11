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
    let newTodo = {
      id: new Date().valueOf(),
      title: todo.title,
      description: todo.description,
      completed: false,
      date: new Date().toLocaleString(),
      userId: user.id,
    };

    arr.push(newTodo);

    if (res) {
      await API.createTodos(arr);
    } else {
      await API.createTodos(arr);
      localStorage.setItem('todos', JSON.stringify(newTodo));
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

export const removeTodo = (todo) => async (dispatch) => {
  try {
    const res = await API.getTodos();
    const newTodos = res.filter((newTodo) => newTodo.id !== todo.id);
    console.log(newTodos);

    await API.createTodos(newTodos);

    dispatch({
      type: GLOBALTYPES.ADD_TODO,
      payload: newTodos,
    });
  } catch (error) {
    console.log(error);
  }
};
