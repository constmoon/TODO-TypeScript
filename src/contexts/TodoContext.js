import React, { useReducer, createContext, useContext } from 'react';
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

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export {
  useTodoState,
  useTodoDispatch,
  TodoProvider
}