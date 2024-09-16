import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Statistics from './App';
import reportWebVitals from './reportWebVitals';
import data from ".//data.json"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
