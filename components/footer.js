import React, { Fragment } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from '@material-ui/core/Link';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from '../themes/theme';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1),
    '&:hover': {
      color: "#f17e00",
    },
  },
  footerDiv: {
    backgroundColor: theme.palette.common.white,
    // backgroundImage: "url('/static/footer-background.png')",
    // backgroundAttachment: 'fixed',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
  },
  footer: {
    padding: theme.spacing(4),
  },
  link: {
    color: theme.palette.secondary.main,
  },
  copyright: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  socials:{
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  smCopyright: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
}));

function Copyright() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2" color="textPrimary">
        {'Copyright ©'}
        <Typography component='span' color="secondary"> ElinayRhythmCenter{' '}</Typography>
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </ThemeProvider>
  );
}

function Socials() {
  const classes = useStyles();

  return (
    <Fragment>
      <Link 
        href="https://www.facebook.com/"
        target="_blank" 
        rel="noopener"
        // title="@elinayMC"
      >
        <FacebookIcon 
          color="secondary"
          className={classes.icon}
          style={{ fontSize: 30 }} 
        />
      </Link>
      <Link 
        href="https://twitter.com/"
        target="_blank" 
        rel="noopener"
        // title="@elinayMC"
      >
        <TwitterIcon 
          color="secondary"
          className={classes.icon}
          style={{ fontSize: 30 }}
        />
      </Link>
      <Link 
        href="https://www.instagram.com/"
        target="_blank" 
        rel="noopener"
        // title="@elinayMC"
      >
        <InstagramIcon 
          color="secondary"
          className={classes.icon}
          style={{ fontSize: 30 }}
        />
      </Link>
    </Fragment>
  )
}

const Footer = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.footerDiv}>
        <footer className={classes.footer}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={false}  className={classes.copyright}>
              <Copyright />
            </Grid>
            <Grid item xs={12} sm={6} md={false} className={classes.socials}>
              <Socials />
            </Grid>
            <Grid item xs={12} sm={6} md={false}  className={classes.smCopyright}>
              <Copyright />
            </Grid>
          </Grid>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default Footer;