import React, { useReducer, createContext, useContext } from 'react';
import TodoData from '../api/data';

const initial = TodoData;

const TOGGLE = 'TOGGLE';
const CREATE = 'CREATE';
const DELETE = 'DELETE';
const EDIT = 'EDIT';
const SET_EDIT_MODE = 'SET_EDIT_MODE';

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return state.map(todo =>
        todo.id === action.todo.id ? { ...todo, checked: !todo.checked } : todo
      );
    case CREATE:
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.todo.text,
        checked: false,
        editMode: false,
      });
    case DELETE:
      return state.filter(todo => todo.id !== action.todo.id);
    case SET_EDIT_MODE:
      return state.map(todo =>
        todo.id === action.todo.id ? { ...todo, editMode: true } : todo
      );
    case EDIT:
      return state.map(todo =>
        todo.id === action.todo.id ?
          {
            ...todo,
            text: action.todo.text,
            editMode: false
          } : todo
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