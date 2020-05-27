import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import BarSession from './bar/BarSession';
export class AppNavBar extends Component {
    render() {
        return (
            <div>
                {/* este componente sera global */}
                <AppBar position="static">
                    <BarSession />
                </AppBar>
            </div>
        )
    }
}

export default AppNavBar
