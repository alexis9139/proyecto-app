import React, { Component } from 'react';
import { Toolbar, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';//esto debe agregarse como funcionalidad

const styles = theme => ({
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    }
});

export class BarSession extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Toolbar>
                    {/* Typography es para escribir texto */}
                    <Typography
                        variant="h6">
                        ALEX HOME
                    </Typography>
                    <div className={classes.sectionDesktop}>
                        <Button>Login</Button>
                    </div>
                </Toolbar>
            </div>
        )
    }
}

export default withStyles(styles)(BarSession)//aqui agregamos withStyles como funcionalidad, es como una propiedad de este componente
//withStyles es una propiedad de BarSession
