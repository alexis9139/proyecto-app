const initialState = {
    //cuando se habra el mensajito el reducer necesita pasarle dos parametros con contextProvider
    //el primero es el estado(true, o false), el segundo parametro es el mensaje que aparecera
    open: false,//por defecto estara cerrado
    mensaje: ""//mensaje que mandare que por defecto estara vacio
}
//creacion dela funcion reducer
const openSnackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_SNACKBAR":
            return {
                ...state,//retorno el estado actual
                open: action.openMensaje.open,//openMensaje debo crearlo, open es el estado
                mensaje: action.openMensaje.mensaje//mensaje es el contenido
            };
        default:
            return state;
    };
};

export default openSnackbarReducer