import React from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../contexts/TodoContext';

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

const DeleteButton = styled.button`
  cursor: pointer;
  margin-left: auto;
  padding: 0.3rem;
  position: relative;
  border: 0;
  font-size: 1.2rem;
  &:focus {
    z-index: 1;
  }
`;

const TodoItem = props => {
  const { id, text, checked } = props;

  const dispatch = useTodoDispatch();

  const onToggle = () => dispatch({
    type: 'TOGGLE',
    todo: {
      id
    }
  });

  const onDelete = () => dispatch({
    type: 'DELETE',
    todo: {
      id
    }
  });

  return (
    <TodoItemBlock>
      <Checkbox checked={checked} onChange={onToggle} />
      <TodoText>{text}</TodoText>
      <DeleteButton
        aria-label="Delete"
        onClick={onDelete}
      >
        <MdDelete />
      </DeleteButton>
    </TodoItemBlock>
  );
};

export default TodoItem;