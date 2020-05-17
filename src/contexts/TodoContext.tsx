import React, { useReducer, Dispatch, createContext, useContext } from 'react';
import TodoData from '../api/data';

export type Todo = {
  id: number;
  text: string;
  checked: boolean;
  editMode: boolean;
};
type TodoState = Todo[];

enum ActionType {
  TOGGLE,
  CREATE,
  DELETE,
  EDIT,
  SET_EDIT_MODE
}

type Action =
  | { type: typeof ActionType.TOGGLE; id: number }
  | { type: typeof ActionType.CREATE; text: string }
  | { type: typeof ActionType.DELETE; id: number }
  | { type: typeof ActionType.SET_EDIT_MODE; id: number }
  | { type: typeof ActionType.EDIT; id: number; text: string };
type TodoDispatch = Dispatch<Action>;

const reducer = (state: TodoState, action: Action): TodoState => {
  switch (action.type) {
    case ActionType.TOGGLE:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    case ActionType.CREATE:
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        checked: false,
        editMode: false,
      });
    case ActionType.DELETE:
      return state.filter(todo => todo.id !== action.id);
    case ActionType.SET_EDIT_MODE:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, editMode: true } : todo
      );
    case ActionType.EDIT:
      return state.map(todo =>
        todo.id === action.id ?
          {
            ...todo,
            text: action.text,
            editMode: false
          } : todo
      );
    default:
      return state;
  }
}

const TodoStateContext = createContext<TodoState | undefined>(undefined);
const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined);

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

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const initial = TodoData;
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
  ActionType,
  useTodoState,
  useTodoDispatch,
  TodoProvider
}