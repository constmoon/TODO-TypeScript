import React from 'react';
import GlobalStyles from './components/Globalstyles';
import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { TodoProvider } from './contexts/TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <TodoTemplate>
        <GlobalStyles />
        <h1>TODO</h1>
        <TodoInput />
        <TodoList />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
