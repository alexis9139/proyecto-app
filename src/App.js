import React, { Component, useEffect } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid'
import AppNavBar from './componentes/layout/AppNavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListaInmueble from './componentes/vistas/ListaInmuebles';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import Login from './componentes/seguridad/Login';
import { FirebaseContext } from './server'

function App(props) {
  //useContext abre el container y extra la variable firebase
  let firebase = React.useContext(FirebaseContext);

  //la necesito para ejecutar un metodo que inicialice y valide la existencia del objeto de authentication
  //los hooks no tienen estado, con la siguiente linea se le agrega un state manual
  //setupFirebaseInicial es un metodo, ese metodo cambia el estado inicial que esta en false
  const [autenticacionIniciada, setupFirebaseInicial] = React.useState(false);//flag que decide si esta listo o no

  //los hooks no tienen un ciclo de vida como las clases
  //debemos usar mecanismo para ejecutar ciertos eventos 
  useEffect(() => {//es como si fuera componentDidMount()<-- se dispara cuando se monto toda la estructura html
    //evaluo el estado de authentication de firebase
    firebase.estaIniciado().then(val => {
      setupFirebaseInicial(val);
    })
  })

  return autenticacionIniciada !== false ? (
    <Router>
      <MuiThemeProvider theme={theme}>
        <AppNavBar />
        <Grid container>
          <Switch>
            <Route path="/" exact component={ListaInmueble}></Route>
            <Route path="/auth/registrarUsuario" exact component={RegistrarUsuario}></Route>
            <Route path="/auth/login" exact component={Login}></Route>
          </Switch>
        </Grid>
      </MuiThemeProvider>
    </Router>
  )
    : null
}

export default App

