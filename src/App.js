import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid'
import AppNavBar from './componentes/layout/AppNavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListaInmueble from './componentes/vistas/ListaInmuebles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme/theme';

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
              </Switch>
            </Grid>
          </MuiThemeProvider>
        </Router>
      </div>
    )
  }
}

export default App

