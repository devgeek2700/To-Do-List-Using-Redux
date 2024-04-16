import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions/taskActions';
import '../App.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  // Check if tasks array is undefined or empty
  if (!tasks || tasks.length === 0) {
    return <center id="notasttxt">No tasks</center>;
  }

  return (
    <div className="container">
      <ul id="completed-tasks">
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <label className={task.completed ? 'completed' : ''}>{task.name}</label>
            <input type="text" />
            <button className="delete" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
