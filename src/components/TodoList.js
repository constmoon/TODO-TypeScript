import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../contexts/TodoContext';

const TodoListBlock = styled.div`
  height: 600px;
  border: 1px solid #000;
  overflow-y: auto;
  margin-top: 1rem;
`;

const TodoList = () => {
  const todoData = useTodoState();

  return (
    <TodoListBlock>
      <ul>
        {todoData.map(todo => (
          <TodoItem
            key={`todo-${todo.id}`}
            id={todo.id}
            text={todo.text}
            checked={todo.checked}
          />
        ))}
      </ul>
    </TodoListBlock>
  );
};

export default TodoList; 