import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Создаём корень приложения на элементе <div id="root"> из public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим компонент App внутрь корня
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
