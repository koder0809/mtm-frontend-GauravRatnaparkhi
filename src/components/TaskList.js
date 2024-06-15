// TaskList.js

import React from 'react';
import './TaskList.css'; // Import custom styles for TaskList

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          <span>{task}</span>
          <button className="edit-button" onClick={() => updateTask(index)}>Edit</button>
          <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
