import Layout from '../components/layout';
import AppHeader from '../src/components/AppHeader';
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
