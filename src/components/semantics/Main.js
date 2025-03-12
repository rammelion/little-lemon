/*import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage ';
import MenuPage from '../../pages/MenuPage';
import BookingPage from '../../pages/BookingPage';
import OrderPage from '../../pages/OrderPage';
import LoginPage from '../../pages/LoginPage';*/

import Specials from '../Specials ';
import CustomersSay from '../CustomersSay';
import Chicago from '../Chicago';


export default function Main(props) {
    return (
        <>
        <main className = 'container-fluid col-lg-8 mt-5 mx-auto flex-column flex-lg-row text-left my-5'>
            <Specials/>
            <CustomersSay/>
            <Chicago/>
        </main>
        </>
    )
}
