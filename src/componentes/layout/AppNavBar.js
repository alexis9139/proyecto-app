import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
export class AppNavBar extends Component {
    render() {
        return (
            <div>
                {/* este componente sera global */}
                <AppBar position="static">
                    <ToolBar></ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default AppNavBar
