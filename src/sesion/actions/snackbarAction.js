export const openMensajePantalla = (dispatch, openMensaje) => {//open es un json,ahi dentro esta el estado y el mensaje
    dispatch({//dispatch es el que llama al reducer
        type: "OPEN_SNACKBAR",
        openMensaje: openMensaje
    })
}