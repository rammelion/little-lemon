import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage ';
import MenuPage from './pages/MenuPage';
import BookingPage from './pages/BookingPage';
import OrderPage from './pages/OrderPage';
import LoginPage from './pages/LoginPage';

import Nav from './components/semantics/Nav';

// Works also with SSR as expected
/*const Card = lazy(() => import('./Card'))*/

function App() {
  return (
    <>
        <HomePage/>
       
    </>
  )
}

export default App
