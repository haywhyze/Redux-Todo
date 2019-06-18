import uuid from 'uuid';
import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from './actionTypes';

export const addTodo = (value, completed) => {
  return {
    type: ADD_TODO,
    payload: {
      id: uuid(),
      value,
      completed,
    }
  }
}

export const toggleComplete = (id, completed) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
      completed,
    }
  }
}
export const deleteTodo = id => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  }
}