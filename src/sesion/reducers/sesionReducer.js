const sesionReducer = (state, action) => {//tendra el estado y la accion del reducer
    //acciones que podra ejecutar este reducer
    //el action es quien llama al reducer, el reducer esta esperando un action para poder trabajar
    switch (action.type) {
        case "INICIAR_SESION"://cuando llame a mi action, debo indicarle el nombre "INICIAR_SESION"
            return {
                ...state,//tiene que contener el estado actual que tengo
                usuario: action.sesion,//variable de initialState<-- indicamos la data que llevara
                autenticado: action.autenticado//cambiamos del false a true
            }
        case "CAMBIAR_SESION":
            return {
                ...state,//cargo todos los datos por defecto de context provider
                usuario: action.nuevoUsuario,
                autenticado: action.autenticado
            }
        case "SALIR_SESION":
            return {
                ...state,
                usuario: action.nuevoUsuario,
                autenticado: action.autenticado
            };
        default:
            return state;
    }
};

export default sesionReducer