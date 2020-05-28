import React from 'react';

const FirebaseContext = React.createContext();

export default FirebaseContext;
//ESTA CREADO PARA QUE SEA CONSUMIDO POR UN COMPONENTE
export const consumerFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);