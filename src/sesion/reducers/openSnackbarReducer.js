const initialState = {
    open: false,//por defecto el popup no es visible, es decir esta cerrado
    mensaje: ""//y su mensaje estara vacio
};

const openSnackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_SNACKBAR"://esta es la accion que redibira de snackbarAction.js linea 3
            return {
                ...state,//retornara el estado actual
                open: action.openMensaje.open,//openMensajes es un json que estara dentro de action
                mensaje: action.openMensaje.mensaje
            };
        default:
            return state;
    }
};

export default openSnackbarReducer;