//como tengo dos reducer, tengo que juntarlos aqui, entonces creo un midderwale
import sesionReducer from './sesionReducer';//traigo sesionReducer
import openSnackbarReducer from './openSnackbarReducer';//traigo openSnackbarReducer

export const mainReducer = ({ sesion, openSnackbar }, action) => {//le paso los dos reducer
    return {//retornara los nuevos estados, que dependera del action que reciba
        sesion: sesionReducer(sesion, action),//sesion recibira sesionReducer
        openSnackbar: openSnackbarReducer(openSnackbar, action)//openSnackbar recibira openSnackbarReducer
    }
}