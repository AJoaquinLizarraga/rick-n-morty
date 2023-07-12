import React from 'react';
import ReactDOM from 'react-dom/client';
// preguntar, aqui me decia que no soporta reactDOM de 'react-dom'
// tengo que importar de 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  
  
)
