import React from 'react';
import styled from 'styled-components';

const TodoItemBlock = styled.li`
  color: #333;
  padding: 1rem;
  text-align: left;
  display: flex;
  align-items: center;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  margin-top: -1px;
`;

const TodoText = styled.label`
  max-width: 370px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  &:checked + ${TodoText} {
    color: #aaa;
    text-decoration: line-through;
  }
  margin-right: 1rem;
`;

const TodoItem = props => {
  const { text, checked } = props;

  return (
    <TodoItemBlock>
      <Checkbox checked={checked} />
      <TodoText>{text}</TodoText>
    </TodoItemBlock>
  );
};

export default TodoItem; 