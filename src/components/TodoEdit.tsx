import React, { useState } from 'react';
import styled from 'styled-components';
import { MdDone } from 'react-icons/md';
import { useTodoDispatch, Todo } from '../contexts/TodoContext';

type TodoEditProps = {
  todo: Todo;
};
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

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

const TodoEdit = ({ todo }: TodoEditProps) => {
  const { id, text } = todo;
  const [editText, setEditText] = useState(text);

  const dispatch = useTodoDispatch();

  const onEditText = (e: InputChangeEvent) => {
    return setEditText(e.target.value)
  }

  const onSubmitEdit = (id: number, text: string) => {
    dispatch({
      type: 'EDIT',
      id,
      text
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