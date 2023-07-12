import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// composeEnhancer solo sirve para conectar la app con la extension REDUX DEVTOOLS del navegador


const store = createStore(
  reducer, 
  composeEnhancer(applyMiddleware(thunkMiddleware))
  // y esto sirve para que podamos hacer peticiones a una Api/servidor
  );
  


export default store;