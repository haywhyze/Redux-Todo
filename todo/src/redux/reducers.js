import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETE } from "./actionTypes";

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case (ADD_TODO):
      return [...state, action.payload];
    case (TOGGLE_COMPLETE):
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: action.payload.completed };
        }
        return todo;
      });
    case (DELETE_TODO):
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}