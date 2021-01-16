import { createMuiTheme, withTheme } from '@material-ui/core/styles';
/* colors
  Primária: #005b95;
  black 87%: #212121;
  Black 54%: #757575;
  black 38%: #DEDEDE;
   */
// Create a theme instance.
const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            contained: {
                fontWeight: 'bold',
            },
            // text: {
            containedSecondary: {
                color: '#757575',
                border: `1px solid #757575`,
                backgroundColor: '#fff',
                '&:hover': {
                    backgroundColor: '#fff',
                    color: '#005b95',
                    border: `1px solid #005b95`,
                }
            }
            // }
        },
    },
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ],
        h1: {
            fontSize: '24px'
        },
        h2: {
            fontSize: '20px'
        },
        h3: {
            fontSize: '14px',
            fontWeight: 'bold'
        },
    },
    /*  
            label: {
               fontSize: '14px',
               fontWeight: 'bold'
           }, 
    */
    palette: {
        primary: {
            main: '#005b95',
        },
        secondary: {
            main: '#757575',
        },
        background: {
            default: '#FFF',
        },
        text: {
            secondary: '#DEDEDE'
        },
    },
});

export default theme;