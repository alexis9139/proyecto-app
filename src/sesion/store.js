//createContext, useContext, useReducer permite crear el ContexProvider global para sesion
import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();//aqui estoy creando un Container
//Los reactContext necesitan un Provider y un Consumer
//Provider se usa colocar o setear el valor inicial que se almacena dentro de la variable que sera global

//children son todos los componentes que tendran acceso a este provider, que son todos los componentes react
//initialState es el valor global que defino
//reducer es la funcion que puedo cambiar esos valores globales
export const StateProvider = ({ reducer, initialState, children }) => (
    //el objeto de hacer esto es para almacenar variables globales dentro de la aplicacacion
    //la variable ira cambiando con el tiempo
    //se puede colocar un valor inicial a esta variable global
    //ese valor inicial puede cambiar con el tiempo, y el que permite que cambie es reducer
    //un reducer es una funcion que permite cambiar el valor de la variable global que definimos en el provider
    //Provider se usa para definir los valore iniciales, o las variables que se almacenaran de manera global
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//useContext es el Consumer
//useContext puedo acceder al valor global sin necesidad de usar un consumer
export const useStateValue = () => useContext(StateContext);
//useStateValue extrae el contenido, es decir el state que esta almacenando el context Global de la app
//dentro useStateValue ya esta el valor de sesionReducer y opensnackbarReducer