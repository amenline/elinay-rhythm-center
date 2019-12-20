import Layout from '../components/Layout';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from '../themes/theme';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: "url('static/hiclipart.png')",
    // backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardNumbering: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  secondSector: {
    backgroundColor: '#d09d6a', //gradient #e1672f
    paddingTop: '20px',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  lastSector: {
    backgroundColor: '#767675', //gradient #e1672f
    paddingTop: '20px',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
}));

const figures = [
  {
    title: 'Start-Ups',
    number: 120
  },
  {
    title: 'Community memebers',
    number: 800
  },
  {
    title: 'Trained Project beneficiaries',
    number: 1345
  },
  {
    title: 'Women Empowered',
    number: 500
  },
];

const Index = () => {
  const classes = useStyles();  

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <main>
          <section className={classes.heroContent}>
            <Container maxWidth="sm" align='center'>
              <Typography component='h1' variant='h3' gutterBottom color='primary'>
                {'A place for your every music need'}
              </Typography>
              <Button variant='outlined' size='large' color='primary'>
                {'Get in touch'}
              </Button>
            </Container>
          </section>
          <div className={classes.secondSector}>
            <Container maxWidth="md" component="section" >
              <Grid container spacing={2} align="center">
                <Grid item xs={12} sm={3} md={6}></Grid>
                <Grid item xs={12} sm={9} md={6}>
                  <Typography component='h1' variant='h3' gutterBottom>
                    {'Let us help you make music'}
                  </Typography>
                  <Button variant='outlined' size='large' color='inherit'>
                    {'See our services'}
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className={classes.lastSector}>
            <Container maxWidth="md" component="section" >
              <Grid container spacing={2} align="center">
                <Grid item xs={12} sm={9} md={6}>
                  <Typography component='h1' variant='h3' gutterBottom>
                    {'Waist no time'}
                  </Typography>
                  <Button variant='outlined' size='large' color='inherit'>
                    {'Make a reservation now'}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={3} md={6}></Grid>
              </Grid>
            </Container>
          </div>
        </main>
      </ThemeProvider>
    </Layout>
  )
}

export default Index;