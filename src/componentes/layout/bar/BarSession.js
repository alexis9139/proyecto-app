import React, { Component } from 'react';
import { Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';//esto debe agregarse como funcionalidad
const styles = theme => ({
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    grow: {//para que se muestre a la derecha
        flexGrow: 1
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
});

export class BarSession extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Toolbar>
                    <IconButton color="inherit">
                        <i className="material-icons">menu</i>
                    </IconButton>
                    {/* Typography es para escribir texto */}
                    <Typography
                        variant="h6">
                        ALEX HOME
                    </Typography>
                    <div className={classes.grow}></div>
                    <div className={classes.sectionDesktop}>
                        {/* color="inherit" toma los colores heredados */}
                        <Button color="inherit">Login</Button>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton color="inherit">
                            <i className="material-icons">more_vert</i>
                        </IconButton>
                    </div>
                </Toolbar>
            </div>
        )
    }
}

export default withStyles(styles)(BarSession)//aqui agregamos withStyles como funcionalidad, es como una propiedad de este componente
//withStyles es una propiedad de BarSession
