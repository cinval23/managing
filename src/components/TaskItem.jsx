import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="task-item">
      <h3
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? 'gray' : 'black',
        }}
      >
        {task.name}
      </h3>
      <p>{task.description}</p>
      <button onClick={() => toggleComplete(task)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task)}>Delete</button>
    </div>
  );
};

export default TaskItem;