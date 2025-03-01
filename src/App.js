import { Suspense, lazy } from 'react'
import Nav from './components/semantics/Nav'
import Header from './components/semantics/Header'
import Main from './components/semantics/Main'
import Footer from './components/semantics/Footer'
import GDPR from './components/GDPR'


// Works also with SSR as expected
/*const Card = lazy(() => import('./Card'))*/

function App() {
  return (
    <>
        <Nav />
        <Header />
        <Main />
        <Footer />
        <GDPR />
    </>
  )
}

export default App
