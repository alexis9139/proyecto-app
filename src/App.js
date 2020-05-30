import React, { Component, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Snackbar } from "@material-ui/core";
import "./App.css";
import ListaInmuebles from "./componentes/vistas/ListaInmuebles";
import AppNavbar from "./componentes/layout/AppNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme/theme";
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";
import Login from "./componentes/seguridad/Login";
import { FirebaseContext } from "./server";

import { useStateValue } from "./sesion/store";//importamos esto por ahi adentro estan los estados del reducer sesion y opensnackbar
import openSnackbarReducer from "./sesion/reducers/openSnackbarReducer";
// import RutaAutenticada from './componentes/seguridad/RutaAutenticada';
// import PerfilUsuario from "./componentes/seguridad/PerfilUsuario";
// import NuevoInmueble from "./componentes/vistas/NuevoInmueble";
// import EditarInmueble from "./componentes/vistas/EditarInmueble";
// import LoginTelefono from "./componentes/seguridad/LoginTelefono";



function App(props) {
  //useContext abreel container y extrae la variable firebase
  //con esa variable ejecuto un metodo que inicialize y valide la existencia del objeto autenticacion
  let firebase = React.useContext(FirebaseContext);
  //setupFirebaseInicial cambia autenticacionIniciaada a true
  const [autenticacionIniciada, setupFirebaseInicial] = React.useState(false);//autenticacionIniciada es false

  //useStateValue <-- es la representacion del context provider,que tiene el sesion y opensnackbarreducer
  const [{ openSnackbar }, dispatch] = useStateValue();//llamo al objeto openSnackbar

  //Hook no tiene ciclo de vida como las clases
  useEffect(() => {//useEffect
    firebase.estaIniciado().then(val => {//evaluo el estado de autenticacion en firebase
      setupFirebaseInicial(val);//aqui cambiamos el valor de la variable
    });
  });

  return autenticacionIniciada !== false ? (//si esta iniciada es decir (true) entonces imprimi
    // React.Fragment es un contenedor generico
    <React.Fragment>
      {/* aqui ponemos el snackbar para que sea global */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar ? openSnackbar.open : false}
        autoHideDuration={3000}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={
          <span id="message-id">
            {openSnackbar ? openSnackbar.mensaje : ""}
          </span>
        }
        onClose={() =>
          dispatch({
            type: "OPEN_SNACKBAR",
            openMensaje: {
              open: false,
              mensaje: ""
            }
          })
        }
      ></Snackbar>
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavbar />

          <Grid container>
            <Switch>
              {/* <RutaAutenticada exact path="/" autenticadoFirebase={firebase.auth.currentUser} component={ListaInmuebles} /> */}
              {/* <RutaAutenticada exact path="/auth/perfil" autenticadoFirebase={firebase.auth.currentUser} component={PerfilUsuario} /> */}
              {/* <RutaAutenticada exact path="/inmueble/nuevo" autenticadoFirebase={firebase.auth.currentUser} component={NuevoInmueble} /> */}
              {/* <RutaAutenticada exact path="/inmueble/:id" autenticadoFirebase={firebase.auth.currentUser} component={EditarInmueble} /> */}
              <Route
                path="/auth/registrarUsuario"
                exact
                component={RegistrarUsuario}
              />
              <Route path="/auth/login" exact component={Login} />
              {/* <Route path="/auth/loginTelefono" exact component={LoginTelefono} /> */}


            </Switch>
          </Grid>
        </MuiThemeProvider>
      </Router>
    </React.Fragment>
  ) : null;//si no esta iniciada no imprime nada
}

export default App;
