import './components/assets/css/fonts.css'
import './components/assets/css/customize-bootstrap.css'
import './components/assets/css/styles.css'

import Header from './components/semantics/Header';
import Nav from './components/semantics/Nav';
import Main from './components/semantics/Main';
import Footer from './components/semantics/Footer';

function App() {
  return (
    <>
     <Nav />
     <Header />
     <Main />
     <Footer />
    </>
  );
}

export default App;
