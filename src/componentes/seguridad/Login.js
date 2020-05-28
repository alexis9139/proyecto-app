import React, { Component } from 'react'
import { Container, Avatar, Typography } from '@material-ui/core'
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
                </div>
            </Container>
        )
    }
}

export default Login
