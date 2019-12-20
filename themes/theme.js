import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f17e00'
    },
    secondary: {
      main: '#e1672f',
      other: '#bababa'
    },
    tertiary: {
      main: '#d09d6a',
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
});

export default theme;