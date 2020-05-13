import React, { useState } from 'react';
import styled from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../contexts/TodoContext';

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  font-size: 0.9rem;
  border: 1px solid #000;
  position: relative;
  &:focus {
    z-index: 1;
  }
`;

const Button = styled.button`
  cursor: pointer;
  padding: .5rem 1rem;
  background-color: #333;
  color: #fff;
  border: 1px solid #000;
  margin-left: -1px;
  position: relative;
  &:focus {
    z-index: 1;
  }
`;

const TodoInput = () => {
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = e => setValue(e.target.value);

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      addTodo();
    }
  }

  const addTodo = () => {
    if (value.length < 1) {
      alert('할 일을 입력하세요');
      return;
    }
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current++,
        text: value,
        checked: false
      }
    });
    setValue('');
  }

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyPress}
      />
      <Button
        type="button"
        onClick={addTodo}
      >추가</Button>
    </InputContainer>
  );
};

export default TodoInput; 