import '../styles/globals.scss'
import config from 'react-reveal/globals';
import Layout from "../layouts/Layout";

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }) {
  return <Layout Component={Component} pageProps={pageProps}/>
}

export default MyApp
