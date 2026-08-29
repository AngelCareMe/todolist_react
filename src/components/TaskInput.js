import React, { useState } from 'react';

// Форма ввода: своё состояние поля + валидация
function TaskInput({ onAdd }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (text === '') return;   // валидация: пустое значение не добавляем
    onAdd(text);               // передаём задачу наверх в App
    setValue('');              // очистка поля
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Новая задача..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default TaskInput;
