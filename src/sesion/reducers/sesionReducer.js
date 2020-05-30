export const initialState = {//creamos un state particular para este reducer y lo pasamos en la linea 16
    usuario: {
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        id: "",
        foto: ""
    },
    autenticado: false
}
//sesionReducer tendra dos parametros para trabajar
//aqui definimos las acciones que podra ejecutar el reducer
//el action es quien llama al reducer,el reducer esta esperando un action para poder trabajar
//sesionAction.js-->iniciarSesion es lo que se metera en la variable action de la linea 16
const sesionReducer = (state = initialState, action) => {//pasamos initialState
    switch (action.type) {
        case "INICIAR_SESION"://esta es una accion, que se le indicara a action
            return {//lo que retorna es un json
                ...state,//estado actual que tengo
                //el sesion se definira dentro del sesionAction.js--> sesion: usuarioDB,<-- linea 17
                usuario: action.sesion,//cambio el valor de usuario, esta es la data que llevara usuario
                autenticado: action.autenticado//cambio el estado
            };
        case "CAMBIAR_SESION"://otro action
            return {//lo que retorna es un json
                ...state,
                usuario: action.nuevoUsuario,
                autenticado: action.autenticado
            };
        case "SALIR_SESION":
            return {
                ...state,
                usuario: action.nuevoUsuario,
                autenticado: action.autenticado
            };
        default://siempre debe ir un default
            return state;
    }
};

export default sesionReducer;//exportamos el reducer