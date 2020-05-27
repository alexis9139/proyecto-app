import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid'
import AppNavBar from './componentes/layout/AppNavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListaInmueble from './componentes/vistas/ListaInmuebles';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <MuiThemeProvider theme={theme}>
            <AppNavBar />
            <Grid container>
              <Switch>
                <Route path="/" exact component={ListaInmueble}></Route>
                <Route path="/auth/registrarUsuario" exact component={RegistrarUsuario}></Route>
              </Switch>
            </Grid>
          </MuiThemeProvider>
        </Router>
      </div>
    )
  }
}

export default App

