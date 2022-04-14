import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import Lista from './components/Lista';
import Lista2 from './components/Lista2';
import { Lista3, Item } from './components/Lista3';
import Formulario from './components/Formulario';
import Hello from './components/Hello';
import Hook from './components/Hook';
import HookDeEfeito from './components/HookDeEfeito';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HookDeEfeito></HookDeEfeito>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
