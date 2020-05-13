import React from 'react';
import styled from 'styled-components';

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
  return (
    <InputContainer>
      <Input type="text" placeholder="할 일을 입력하세요" />
      <Button type="button">추가</Button>
    </InputContainer>
  );
};

export default TodoInput; 