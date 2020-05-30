import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './server';

import { initialState } from './sesion/initialState';//importamos el ContextProvider sesion
import { StateProvider } from './sesion/store';//este es como el motor, enlaza el reducer y el estado inicial de la aplicacion
import sesionReducer from './sesion/reducers/sesionReducer';//este esta en mainReducer
import { mainReducer } from './sesion/reducers';



ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    {/* el provider sesion debe estar debajo de firebase context */}
    {/* en StateProvider defino el estado inicial y el reducer */}
    {/* reducer={mainReducer} importo a los dos para que sea global */}
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <App />
    </StateProvider>
  </FirebaseContext.Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
