import API from '../../utils/api';
import { GLOBALTYPES } from '../types';

export const addTodo = (todo, user) => async (dispatch) => {
  try {
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

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        status: 'success',
        message: 'Задача успешно добавлена',
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

export const getTodos = () => async (dispatch) => {
  try {
    const res = await API.getTodos();

    dispatch({
      type: GLOBALTYPES.ADD_TODO,
      payload: res,
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

export const toggleTodoStatus = (todo) => async (dispatch) => {
  try {
    const res = await API.getTodos();
    const newTodos = res.map((newTodo) => {
      return newTodo.id === todo.id
        ? { ...newTodo, completed: !todo.completed }
        : newTodo;
    });

    localStorage.setItem('todos', JSON.stringify(newTodos));

    dispatch({
      type: GLOBALTYPES.ADD_TODO,
      payload: newTodos,
    });

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        status: 'success',
        message: 'Задача выполнена',
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
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        status: 'warning',
        message: error,
      },
    });
  }
};
