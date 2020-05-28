import sesionReducer from './sesionReducer';
import openSnackbarReducer from './openSnackbarReducer';


//action para que sea dinamico
export const mainReducer = ({ sesion, openSnackbar }, action) => {
    return {
        sesion: sesionReducer(sesion, action),
        openSnackbar: openSnackbarReducer(openSnackbar, action)
    }
}