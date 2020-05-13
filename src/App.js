import React from 'react';
import GlobalStyles from './components/Globalstyles';
import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <TodoTemplate>
      <GlobalStyles />
      <h1>TODO</h1>
      <TodoInput />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
