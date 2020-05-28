import React, { Component } from 'react'
import { Container, Avatar, Typography, Grid, TextField, Button } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { compose } from 'recompose';
import { consumerFirebase } from '../../server'
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

class RegistrarUsuario extends Component {
    state = {
        firebase: null,
        usuario: {
            nombre: '',
            apellido: '',
            email: '',
            password: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prepState) {
        //si la siguiente propiedad firebase es identica al previoestado firebase  no ocurre nada
        if (nextProps.firebase === prepState.firebase) {
            return null;
        }
        return {
            //si no es verdad necesito que ese valor que esta entrando se actualice dentro del estado de registrar usuario
            //procedemos a cambiar el state del componente
            firebase: nextProps.firebase
        }
    }

    onChange = e => {
        // agarre al actual usuario, y que a traves de ese usuario me clone el valor de ese usario y lo almacene en el variable usuario
        let usuario = Object.assign({}, this.state.usuario)//clono el estado del usuario y lo almaceno en la variable let usuario
        usuario[e.target.name] = e.target.value;//tomo el atributo name de la caja y le cargo el valor que se esta ingresando
        this.setState({
            usuario: usuario
        })
    }

    //boton registrar
    registrarUsuario = e => {
        e.preventDefault();//no quiero que haga el refresh otra vez
        console.log('imprimir objeto usuario del state', this.state.usuario)
    }
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
                                <TextField name="nombre" onChange={this.onChange} fullWidth value={this.state.usuario.nombre} label="Ingrese su nombre"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField name="apellido" onChange={this.onChange} fullWidth label="Ingrese su apellido"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField name="email" onChange={this.onChange} fullWidth label="Ingrese su email"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField type="password" onChange={this.onChange} name="password" fullWidth label="Ingrese su password"></TextField>
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={12} md={6}>
                                <Button type="submit" onClick={this.registrarUsuario} variant="contained" fullWidth size="large" color="primary" style={style.submit}>
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

export default compose(consumerFirebase)(RegistrarUsuario);