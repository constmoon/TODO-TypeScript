import React, { useState } from 'react';
import styled from 'styled-components';
import { MdDone } from 'react-icons/md';
import { useTodoDispatch } from '../contexts/TodoContext';

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

const SubmitEdit = styled.button`
  cursor: pointer;
  padding: 0.3rem;
  border: 0;
  font-size: 1.2rem;
  position: relative;
  margin-left: auto;
  &:focus {
    z-index: 1;
  }
`;

const TodoEdit = props => {
  const { id, text } = props;
  const [editText, setEditText] = useState(text);

  const dispatch = useTodoDispatch();

  const onEditText = e => {
    return setEditText(e.target.value)
  }

  const onSubmitEdit = (id, text) => {
    dispatch({
      type: 'EDIT',
      todo: {
        id,
        text
      }
    });
  }

  return (
    <>
      <TodoEditText
        value={editText}
        onChange={onEditText}
      />
      <SubmitEdit
        aria-label="submit"
        onClick={() => onSubmitEdit(id, editText)}
      >
        <MdDone />
      </SubmitEdit>
    </>
  );
}

export default TodoEdit; 