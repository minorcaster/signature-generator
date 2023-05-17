import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.error = (message) => {
  if (/ResizeObserver loop limit exceeded/.test(message)) {
    return;
  }
  // 默认的错误处理方法
  console.error(message);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
