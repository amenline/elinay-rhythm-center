import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import FacebookIcon from '@material-ui/icons/Facebook';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import List from '@material-ui/core/List';
import Link from 'next/link';
import { makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import {default as MaterialLink} from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import NextLink from './NextLink';
import theme from '../themes/theme';
import Toolbar from '@material-ui/core/Toolbar';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { withRouter } from 'next/router';
import Zoom from '@material-ui/core/Zoom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  divSpacer: {
    height: '35vh',
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  navlinks: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: theme.palette.common.white,
  },
  drawerIcons: {
    margin: theme.spacing(1),
    textAlign: 'center',
  },
  activeMenuItem: {
    color: '#e1672f',
  },
  reservationBtn: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const StyledButton = withStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: '#e1672f',
    '&:hover': {
      backgroundColor: '#f17e00',
    },  
  },
}))(Button);

const Navbar = withRouter((props) => {
  const { container } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // get current page's url path
  const location = props.router.pathname;

  const drawer = (
    <ThemeProvider theme={theme}>
      <nav>
        <Link href='/'>
          <div className={classes.toolbar} align='center'>
              <a  onClick={handleDrawerToggle}>
                <img src="/static/ERC-logo.png" alt="ERC Logo" width="120px" />
              </a>
          </div>
        </Link>
        <Divider />
        <MenuList>
          {/* <MenuItem 
            component={NextLink} 
            href="/about" 
            selected={'/about' === location} 
            onClick={handleDrawerToggle} 
            className={location === '/about' ? classes.activeMenuItem : classes.menuItem}
          >
            {'About'}
          </MenuItem> */}
          <MenuItem 
            component={NextLink} 
            href="/services" 
            selected={'/services' === location} 
            onClick={handleDrawerToggle} 
            className={location === '/services' ? classes.activeMenuItem : classes.menuItem}
          >
            {'Services'}
          </MenuItem>
          <MenuItem 
            component={NextLink} 
            href="/contact" 
            selected={'/contact' === location} 
            onClick={handleDrawerToggle} 
            className={location === '/contact' ? classes.activeMenuItem : classes.menuItem}
          >
            {'Contact'}
          </MenuItem>
          <Box className={classes.reservationBtn}>
            <MenuItem 
              component={NextLink} 
              href="/reservation" 
              selected={'/reservation' === location} 
              onClick={handleDrawerToggle} 
              className={location === '/reservation' ? classes.activeMenuItem : null}
            >
              {'Make a reservation'}
            </MenuItem>
          </Box>
        </MenuList>
        <div className={classes.divSpacer} />
        <Divider />
        <List style={{textAlign: 'center'}}>
          <MaterialLink 
            color="primary" 
            href="https://www.facebook.com/"
            target="_blank" 
            rel="noopener"
            onClick={handleDrawerToggle}
            className={classes.drawerIcons}
          >
            <FacebookIcon fontSize="large" />
          </MaterialLink>
          <MaterialLink 
            color="primary" 
            href="https://twitter.com/"
            target="_blank" 
            rel="noopener"
            onClick={handleDrawerToggle}
            className={classes.drawerIcons}
          >          
            <TwitterIcon fontSize="large" />
          </MaterialLink>
          <MaterialLink 
            color="primary" 
            href="https://www.instagram.com/"
            target="_blank" 
            rel="noopener"
            onClick={handleDrawerToggle}
            className={classes.drawerIcons}
          >
            <InstagramIcon fontSize="large" />
          </MaterialLink>
        </List>
      </nav>
    </ThemeProvider>
  );

  return (
    <ThemeProvider theme={theme}>
      <nav className={classes.AppBar} id="back-to-top-anchor" position="relative">
        <Toolbar>
          <Typography component='h1' edge="start" className={classes.title} noWrap>
            <Link href='/'>
              <a>
                <img src="/static/ERC-logo.png" alt="ERC Logo" width="100px" />
              </a>
            </Link>
          </Typography>
          <nav className={classes.navlinks}>       
            {/* <Button component={NextLink} href="/about" color={location === '/about' ? "secondary" : "inherit"} className={classes.margin}>
              {'About'}
            </Button> */}
            <Button component={NextLink} href="/services" color={location === '/services' ? "secondary" : "inherit"} className={classes.margin}>
              {'Services'}
            </Button>        
            <Button component={NextLink} href="/contact" color={location === '/contact' ? "secondary" : "inherit"} className={classes.margin}>
              {'Contact'}
            </Button>
            <Box className={classes.reservationBtn}>
              <StyledButton component={NextLink} href="/reservation" color={location === '/reservation' ? "secondary" : "inherit"} variant='contained' className={classes.margin}>
                {'Make a reservation'}
              </StyledButton>  
            </Box>
          </nav>
          <IconButton 
            color="inherit" 
            aria-label="menu"
            onClick={handleDrawerToggle}
            className={classes.menuButton} 
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <div className={classes.drawer} aria-label="app drawer">
          <Hidden smUp implementation="js">
            <Drawer
              container={container}
              variant="temporary"
              anchor={'right'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </div>
        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </nav>
    </ThemeProvider>
  );
})

export default Navbar;