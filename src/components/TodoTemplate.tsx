import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  max-width: 512px;
  margin: 2rem auto;
  text-align: center;
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate; 