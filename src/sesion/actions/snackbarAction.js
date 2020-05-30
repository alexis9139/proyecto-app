export const openMensajePantalla = (dispatch, openMensaje) => {
    dispatch({//dispatch es el que llama a reducer
        type: "OPEN_SNACKBAR",//tiene la action
        openMensaje: openMensaje//pasamos el openMensaje a un openMensaje
    })
}