import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter1 from './Counter1';

ReactDOM.render(
  <React.StrictMode>
  <h1>Counter in ReactJs</h1>
    <Counter1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
