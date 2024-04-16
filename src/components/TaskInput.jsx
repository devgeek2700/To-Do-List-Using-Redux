import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import "../App.css";

const TaskInput = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      dispatch(addTask(taskName));
      setTaskName("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="container">
      <h2>TODO LIST</h2>
      <div>
        <h3>Add Item</h3>
        <p>
          <input
            id="new-task"
            type="text"
            value={taskName}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleAddTask}>Add</button>
        </p>
      </div>
    </div>
  );
};

export default TaskInput;
