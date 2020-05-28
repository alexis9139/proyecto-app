import React, { Component } from 'react'
import { Container, Avatar, Typography, TextField, Button } from '@material-ui/core'
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

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
                        />

                        <TextField
                            variant="outlined"//borde
                            label="Password"
                            name="password"
                            type="password"
                            fullWidth
                            margin="normal"
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

export default Login
