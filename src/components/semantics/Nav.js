import Logo from "../Logo"
import NavMenu from "../NavMenu"

export default function Nav() {
    return (
        <nav>
            <a href="/"><Logo type='horizontal' /></a>
            <NavMenu />
        </nav>
    )
}