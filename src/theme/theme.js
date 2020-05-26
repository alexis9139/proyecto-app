import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            main: '#ff8f00'
        },
        common: {
            white: 'white'
        },
        secondary: {
            main: '#69f0ae'
        }
    },
    spacing: 10
});


export default theme