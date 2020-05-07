import React from 'react';
import GlobalStyles from './components/Globalstyles';
import TodoTemplate from './components/TodoTemplate';

function App() {
  return (
    <TodoTemplate>
      <GlobalStyles />
      <h1>TODO</h1>
      <div>
        <input type="text" placeholder="할 일을 입력하세요" />
        <button type="button">추가</button>
      </div>
      <div>
        <ul>
          <li>할 일1</li>
          <li>할 일2</li>
          <li>할 일3</li>
        </ul>
      </div>
    </TodoTemplate>
  );
}

export default App;
