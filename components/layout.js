import { Fragment } from 'react';
import Navbar from './navbar';
import Head from './head';
import Footer from './footer';
import { Divider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline'

const Layout = (props) => {
  return (
    <Fragment>
      <CssBaseline />
      <Head title="Elinay Rhythm Center" />
      <Navbar />
      {props.children}
      <Divider />
      <Footer />
    </Fragment>
  )
}

export default Layout;