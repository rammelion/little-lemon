import Logo from "../Logo"
import Container from "../Container"
export default function Footer() {
    return (
        <footer className = 'col-lg-8 mt-5 mx-auto flex-column flex-lg-row text-left'>
            <Container className = 'flex-basis-25'>
                <div>
                    <Logo type='standalone' width="128px" />
                </div>
            </Container>
            <Container className = 'flex-basis-25'>
                <div>
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li><a href= '/'>Home</a></li>
                        <li><a href= '/'>About</a></li>
                        <li><a href= '/'>Menu</a></li>
                        <li><a href= '/'>Reservations</a></li>
                        <li><a href= '/'>Order Online</a></li>
                        <li><a href= '/'>Menu</a></li>
                    </ul>
                </div>
            </Container>
            <Container className = 'flex-basis-25'>
                <div className = 'display: block'>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
            </Container>
            <Container className = 'flex-basis-25'>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href= '/'>Facebook</a></li>
                        <li><a href= '/'>Instagram</a></li>
                        <li><a href= '/'>X</a></li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}