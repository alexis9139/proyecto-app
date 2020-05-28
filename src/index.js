import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './server';
// const FirebaseContext = React.createContext();
import { initialState } from './sesion/initialState';
import { StateProvider } from './sesion/store';//es como el motor de todo, enlaza el reducer y el estado inicial de la app
import sesionReducer from './sesion/reducers/sesionReducer';
ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <StateProvider initialState={initialState} reducer={sesionReducer}>
        <App />
      </StateProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
