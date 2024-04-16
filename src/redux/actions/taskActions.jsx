export const addTask = (taskName) => {
    return {
      type: 'ADD_TASK',
      payload: {
        id: new Date().getTime(),
        name: taskName,
      },
    };
  };
  
  export const deleteTask = (taskId) => {
    return {
      type: 'DELETE_TASK',
      payload: {
        id: taskId,
      },
    };
  };

  export const toggleTask = (taskId) => {
    return {
      type: 'TOGGLE_TASK',
      payload: {
        id: taskId,
      },
    };
  };
  