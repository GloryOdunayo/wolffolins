import { AppContextProvider } from '../components/AppContext';
import '../styles/globals.scss'
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )

}

export default MyApp
