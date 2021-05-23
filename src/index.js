import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Todo from './components/Todo';

ReactDOM.render(
  <React.StrictMode>
    <Todo/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
