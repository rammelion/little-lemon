export default function NavMenu() {
    return (
        <div className = 'collapse nav navbar-collapse justify-content-end' id = 'navbarNav'>
        <ul className = 'navbar-nav navbar-nav-underline'>
            <li className = 'nav-item text-end'>
                <a className = 'nav-link active' aria-current="page" href= '/#'>Home</a>
            </li>
            <li className = 'nav-item text-end'>
                <a className = 'nav-link' href= '/#'>About</a>
            </li>
            <li className = 'nav-item text-end'>
                <a className = 'nav-link' href= '/#'>Menu</a>
            </li>
            <li className = 'nav-item text-end'>
                <a className = 'nav-link' href= '/#'>Reservations</a>
            </li>
            <li className = 'nav-item text-end'>
                <a className = 'nav-link' href= '/#'>Order Online</a>
            </li>
            <li className = 'nav-item text-end'>
                <a className = 'nav-link' href= '/#'>Login</a>
            </li>
        </ul>
        </div>
    )
}