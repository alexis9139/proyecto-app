import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import BarSession from './bar/BarSession';
import { withStyles } from '@material-ui/styles';
import { compose } from 'recompose';
import { consumerFirebase } from '../../server';//aqui el firebase esta como una propiedad
import { StateContext } from '../../sesion/store';//esta es la representacion del contextProvider global


const styles = theme => ({
    sectionDesktop: {//se desplegara cuando el tamaño de la pantalla sea un desktop
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
})



export class AppNavBar extends Component {
    static contextType = StateContext;
    state = {
        firebase: null
    }

    componentDidMount() {//solo se ejecuta una sola vez este metodo,cuando se termino de cargar la pagina del componente react
        //necesito extraer la sesion del usaurio cuando se termine de cargar la pagina
        const { firebase } = this.state//esto lo obtengo por que implemente el getDerivedStateFromProps, esto es local state
        //debo cargar tambien la sesion
        const [{ sesion }, dispatch] = this.context//esto es global state

        //los tiempos deben de sincronizarse en algun punto
        //quiero que se muestre el nombre y la foto de quien inicio sesion
        //si le doy un refresh a la pagina se perdera el estado de la sesion 
        //por lo tanto necesito hacer una validacion ahi en caso de que la pagina se refresque y el usuario ya se haya logeado
        //firebase.auth.currentUser tengo el id
        if (firebase.auth.currentUser !== null && !sesion) {//!sesion indice que sesion es null, osea que necesita volver llamar a firebase
            //llamo al usuario
            firebase.db
                .collection("Users")
                .doc(firebase.auth.currentUser.uid)//busca el doc que corresponde con el usuario
                .get()
                .then(doc => {
                    const usuarioDB = doc.data();//aqui ya tengo el objeto, usuarioDB tiene el objeto
                    //ahora esa data que tengo hare que se actualice o se envie al contextProvider
                    //tengo que mandar al action y el action manda al reducer y el reducer actualiza el objeto resion de mi context provider
                    dispatch({ //el dispatch directamente llama al reducer
                        type: "INICIAR_SESION",
                        sesion: usuarioDB,
                        autenticado: true
                    });
                });
        }
    }

    //con esto estoy haciendo que ingrese en el estado local  de appnavbar
    static getDerivedStateFromProps(netxProps, prevState) {
        let nuevosObjetos = {};
        if (netxProps.firebase !== prevState.firebase) {//si son diferentes
            //tiene que actualizar el objeto firebase en la sesion local del appnavbar
            nuevosObjetos.firebase = netxProps.firebase
        }
        return nuevosObjetos;
    }
    render() {
        //heredo una constante para traer al sesion
        const [{ sesion }, dispatch] = this.context;
        //en elr return condiciono que el sesion exista
        //si el sesion no existe no imprimira la barra
        return sesion ? (sesion.autenticado ? (
            <div>
                {/* este componente sera global */}
                <AppBar position="static">
                    <BarSession />
                </AppBar>
            </div>
        )
            : null
        )
            : null;
    }
}

export default compose(withStyles(styles), consumerFirebase)(AppNavBar);
