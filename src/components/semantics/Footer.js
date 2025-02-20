import Logo from "../Logo"
import FooterColumn from "../FooterColumn"
export default function Footer() {
    return (
        <footer>
            <FooterColumn>
                <div>
                    <Logo location='footer' />
                </div>
            </FooterColumn>
            <FooterColumn>
                <div>
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Menu</a></li>
                    </ul>
                </div>
            </FooterColumn>
            <FooterColumn>
                <div class="display: block">
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
            </FooterColumn>
            <FooterColumn>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">X</a></li>
                    </ul>
                </div>
            </FooterColumn>
        </footer>
    )
}