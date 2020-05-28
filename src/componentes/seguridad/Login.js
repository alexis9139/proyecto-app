import React, { Component } from 'react'
import { Container, Avatar, Typography, TextField, Button } from '@material-ui/core'
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import { compose } from 'recompose';
import { consumerFirebase } from '../../server'
const style = {
    paper: {
        marginTop: 9,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: 5,
        backgroundColor: "red"
    },
    form: {
        width: "100%",
        marginTop: 8,

    }
}


class Login extends Component {
    state = {
        firebase: null,
        usuario: {
            email: "",
            password: ""
        }
    }

    onChange = e => {
        //capturamos el valor actual del state del usurio
        let usuario = Object.assign({}, this.state.usuario)
        usuario[e.target.name] = e.target.value//capturamos el valor que el usuario ingresa en las cajas de texto
        this.setState({
            usuario: usuario
        })
    }


    render() {
        return (
            <Container maxWidth="xs">
                <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <LockOutlineIcon />
                        {/* <PermIdentityIcon /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Ingrese usuario
                    </Typography>
                    <form styl={style.form}>
                        <TextField
                            variant="outlined"//borde
                            label="Email"
                            name="email"
                            fullWidth
                            margin="normal"
                            onChange={this.onChange}
                            value={this.state.usuario.email}
                        />
                        <TextField
                            variant="outlined"//borde
                            label="Password"
                            name="password"
                            type="password"
                            fullWidth
                            margin="normal"
                            onChange={this.onChange}
                            value={this.state.usuario.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"//le da un color de fondo
                            color="primary"
                        >
                            Enviar
                        </Button>
                    </form>
                </div>
            </Container>
        )
    }
}

export default compose(consumerFirebase)(Login)
