import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: '#e1672f',
    '&:hover': {
      backgroundColor: '#f17e00',
    },  
  },
}))(Button);

export default StyledButton