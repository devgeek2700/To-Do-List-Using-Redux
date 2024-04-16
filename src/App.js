// App.js
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <center>Todo App</center>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
