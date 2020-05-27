import React, { Component } from 'react'
import { Container, Avatar, Typography, Grid, TextField, Button } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
const style = {
    paper: {
        marginTop: 8,
        display: "flex",//para que se ordenen uno tras otro
        flexDirection: "column",//la direccion sera vertical
        alignItems: "center",
    },
    avatar: {
        margin: 8,
        backgroundColor: "#69f0ae",
        color: "black"
    },
    form: {
        width: "100%",
        marginTop: 10,
    },
    submit: {
        marginTop: 15,
        marginBotton: 20,
    },
}


export default class RegistrarUsuario extends Component {
    render() {
        return (
            <Container maxWidth="md">
                {/* en el div alineare los elementos en vertical */}
                <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <PermIdentityIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registre su cuenta
                    </Typography>
                    <form style={style.form}>
                        {/* al crear un Grid de tipo container puedo distribuir los espacios de cada componente */}
                        <Grid container spacing={2}>
                            {/* quiero que cuando sea un desktop ocupe la mitad del container */}
                            <Grid item md={6} xs={12}>
                                <TextField name="nombre" fullWidth label="Ingrese su nombre"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField name="apellido" fullWidth label="Ingrese su apellido"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField name="email" fullWidth label="Ingrese su email"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField type="password" name="password" fullWidth label="Ingrese su password"></TextField>
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={12} md={6}>
                                <Button type="submit" variant="contained" fullWidth size="large" color="primary" style={style.submit}>
                                    Registrar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}
