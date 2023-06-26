import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import '@/styles/auth.css'
import '@/styles/navbar.css'
import '@/styles/footer.css'
import '@/styles/detailticket.css'
import '@/styles/transaction.css'
import '@/styles/profile.css'
import '@/styles/mybooking.css'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}