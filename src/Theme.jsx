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
      // outlined: {
      //     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      // },
      contained: {
        fontWeight: 'bold',
        borderRadius: 0,
      },
      // text: {
      containedSecondary: {
        color: '#005b95',
        border: `1px solid #757575`,
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '#fff',
          color: '#005b95',
          border: `1px solid #005b95`,
        }
      }
    },
    // MuiButtonBase: {
    //     root: {
    //         height: 49,
    //         margin: '40px 40px 40px 20px',
    //         boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    //         borderRadius: 0,
    //     }
    // },
    // MuiInputBase: {
    //     input: {
    //         textOverflow: 'ellipsis',
    //         overflow: 'hidden',
    //         whiteSpace: 'noWrap',
    //     }
    // },
    MuiOutlinedInput: {
      root: {
        height: 49,
        borderRadius: 0,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ],
    h1: {
      fontSize: '24px',
      color: '#005b95'
    },
    h2: {
      fontSize: '20px'
    },
    h3: {
      fontSize: '14px',
      fontWeight: 'bold'
    },
    body2: {
      fontSize: '16px',
      fontWeight: 'bold'
    },
  },
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
      primary: '#000',
      secondary: '#DEDEDE'
    },
  },
});

export default theme;