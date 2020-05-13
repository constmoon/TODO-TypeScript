import React, { useReducer, createContext, useContext, useRef } from 'react';
import TodoData from '../api/data';

const initial = TodoData;

const TOGGLE = 'TOGGLE';
const CREATE = 'CREATE';
const DELETE = 'DELETE';

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return state.map(todo =>
        todo.id === action.todo.id ? { ...todo, checked: !todo.checked } : todo
      );
    case CREATE:
      return state.concat(action.todo);
    case DELETE:
      return state.filter(todo => todo.id !== action.todo.id);
    default:
      return state;
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

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

const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);
  const nextId = useRef(3);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export {
  useTodoState,
  useTodoDispatch,
  TodoProvider,
  useTodoNextId
}