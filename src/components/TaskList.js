import React from 'react';
import TaskItem from './TaskItem';

// Список задач: рендеринг массива методом map
function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty">Задач пока нет — добавьте первую!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;
