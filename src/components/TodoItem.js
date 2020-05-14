import React, { useState } from 'react';
import styled from 'styled-components';
import { MdDelete, MdEdit, MdDone } from 'react-icons/md';
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

const TodoEditText = styled.input.attrs({ type: 'text' })`
  max-width: 370px;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #000;
  font-size: 1rem;
  &:focus {
    outline: 0;
  }
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

const SubmitEdit = styled.button`
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
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

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

  const onEditText = e => {
    return setEditText(e.target.value)
  }

  const onSubmitEdit = (id, text) => {
    setIsEditing(true)
    dispatch({
      type: 'EDIT',
      todo: {
        id,
        text
      }
    });
    setIsEditing(false)
  }

  return (
    <TodoItemBlock>
      <Checkbox checked={checked} onChange={onToggle} />
      {isEditing ?
        <TodoEditText
          value={editText}
          onChange={onEditText}
        /> :
        <TodoText>{text}</TodoText>}
      <ButtonWrap>
        {isEditing ?
          <SubmitEdit
            aria-label="submit"
            onClick={() => onSubmitEdit(id, editText)}
          >
            <MdDone />
          </SubmitEdit> :
          <EditButton
            aria-label="Edit"
            onClick={() => setIsEditing(true)}
          >
            <MdEdit />
          </EditButton>
        }
        <DeleteButton
          aria-label="Delete"
          onClick={onDelete}
        >
          <MdDelete />
        </DeleteButton>
      </ButtonWrap>
    </TodoItemBlock>
  );
};

export default TodoItem;