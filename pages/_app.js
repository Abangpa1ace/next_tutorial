import AppHeader from '../src/components/AppHeader';
import AppFooter from '../src/components/AppFooter';
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppHeader></AppHeader>
      <Component {...pageProps} />
      <AppFooter></AppFooter>
    </div>
  )
}

export default MyApp
