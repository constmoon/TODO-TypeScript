import React, { useReducer } from 'react';
import TodoData from '../api/data';

const initial = TodoData;

const TOGGLE = 'TOGGLE';

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return state.map(todo =>
        todo.id === action.todo.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return state;
  }
}

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);

  return children;
}

export {
  TodoProvider
} 