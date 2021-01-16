import { createMuiTheme } from '@material-ui/core/styles';
/* colors
  Primária: #005b95;
  black 87%: #212121;
  Black 54%: #757575;
  black 38%: #DEDEDE;
   */
// Create a theme instance.
const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ]
    },
    palette: {
        primary: {
            main: '#005b95',
        },
        secondary: {
            dark: '#212121',
            main: '#757575',
            light: '#DEDEDE'
        },
        background: {
            default: '#FFF',
        },
    },
});

export default theme;