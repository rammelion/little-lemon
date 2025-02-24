import Logo from "../Logo"
import NavMenu from "../NavMenu"

export default function Nav() {
    return (
        <nav className="col-lg-8 navbar navbar-expand-lg navbar-light mx-lg-auto px-lg-5">
            <a className="navbar-brand" href="/#"><Logo type='horizontal'/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <NavMenu />
        </nav>
    )
}