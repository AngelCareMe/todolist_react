import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  // состояние массива задач остаётся в App
  const [tasks, setTasks] = useState([]);

  // добавление задачи (вызывается из TaskInput)
  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  // удаление задачи по id (вызывается из TaskItem через TaskList)
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Список дел</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
