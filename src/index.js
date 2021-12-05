import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormGroup from './component/FormGroup';
import HeaderPage from './component/HeaderPage';

ReactDOM.render(
  <React.StrictMode>
    <HeaderPage />
    <FormGroup />
  </React.StrictMode>,
  document.getElementById('root')
);
