import React, { createContext, useContext, useReducer } from 'react';


export const StateContext = createContext();//estoy creando un container
//los react context necesitan un provider y un consumer para poder trabajar
//provider lo uso para poder setear o colocar un valor inicial que se almacena dentro de la variable global
//consumer para poder acceder a ese valor
//lo que pasamos por llaves son los componentes que tendran acceso al provider
//children representa cualquier componente que voy a crear o que ya cree
export const StateProvider = ({ reducer, initialState, children }) => (
    // value={useReducer(reducer), initialState}
    //reducer permite cambiar el valor de la variable global que se definio en el provider
    //initialState es el valor global que defino
    //provider se usa para definir los valor iniciales
    //consumer para que pueda ser usado, accede al valor de la variable global
    <StateContext.Provider value={useReducer(reducer), initialState}>
        {/* dentro de eto iran los hijos, es decir los componentes de la aplicacion */}
        {children}
    </StateContext.Provider>
)

//mediante use context (consumer) puedo acceder a la variable global
export const useStateValue = () => useContext(StateContext);