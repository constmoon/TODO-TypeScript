import React from 'react';
import styled from 'styled-components';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useTodoDispatch } from '../contexts/TodoContext';
import TodoEdit from './TodoEdit';

const TodoItemBlock = styled.li`
  color: #333;
  padding: 1rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const ButtonWrap = styled.div`
  margin-left: auto;
`;

const EditButton = styled.button`
  cursor: pointer;
  padding: 0.3rem;
  border: 0;
  font-size: 1.2rem;
  position: relative;
  &:focus {
    z-index: 1;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  padding: 0.3rem;
  position: relative;
  border: 0;
  font-size: 1.2rem;
  &:focus {
    z-index: 1;
  }
`;

const TodoItem = props => {
  const { id, text, checked, editMode } = props;

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

  const setEditMode = () => dispatch({
    type: 'SET_EDIT_MODE',
    todo: {
      id
    }
  });

  return (
    <TodoItemBlock>
      <Checkbox checked={checked} onChange={onToggle} id={`todo-${id}`} />
      {editMode ? <TodoEdit id={id} text={text} /> :
        <>
          <TodoText htmlFor={`todo-${id}`}>{text}</TodoText>
          <ButtonWrap>
            <EditButton aria-label="Edit" onClick={setEditMode}>
              <MdEdit />
            </EditButton>
            <DeleteButton aria-label="Delete" onClick={onDelete}>
              <MdDelete />
            </DeleteButton>
          </ButtonWrap>
        </>
      }
    </TodoItemBlock>
  );
}

export default TodoItem;