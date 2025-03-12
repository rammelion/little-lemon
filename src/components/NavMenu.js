import { Link } from 'react-router-dom';

export default function NavMenu() {
    return (
        <div className = 'collapse nav navbar-collapse justify-content-end' id = 'navbarNav'>
        <ul className = 'navbar-nav navbar-nav-underline'>
            <li className = 'nav-item text-end'>
                <Link className = 'nav-link active' aria-current="page" href= '/#'>Home</Link>
            </li>
            <li className = 'nav-item text-end'>
                <Link className = 'nav-link' href= '/#'>About</Link>
            </li>
            <li className = 'nav-item text-end'>
                <Link className = 'nav-link' href= '/#'>Menu</Link>
            </li>
            <li className = 'nav-item text-end'>
                <Link className = 'nav-link' href= '/#'>Reservations</Link>
            </li>
            <li className = 'nav-item text-end'>
                <Link className = 'nav-link' href= '/#'>Order Online</Link>
            </li>
            <li className = 'nav-item text-end'>
                <Link className = 'nav-link' href= '/#'>Login</Link>
            </li>
        </ul>
        </div>
    )
}