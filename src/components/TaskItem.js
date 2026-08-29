import React from 'react';

// Одна задача с кнопкой удаления
function TaskItem({ task, onDelete }) {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </li>
  );
}

export default TaskItem;
