import React, { Component } from 'react';
import './App.css';
import ListaInmueble from './componentes/vistas/ListaInmuebles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme/theme';

export class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <ListaInmueble />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App

