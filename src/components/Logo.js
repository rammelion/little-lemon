import horinzontalLogo from './assets/img/Logo.svg'
import standAloneLogo from './assets/img/logo.png'
export default function Logo(props) {
    if (props.type==='horizontal') {
        return (
            <a href="/">
                <img src={horinzontalLogo} alt="Litte Lemon Logo"></img>
            </a>
        )
    } else if (props.type==='standalone') {
        return (
            <div>
                <a href="/">
                    <img src={standAloneLogo} alt="Litte Lemon Logo"></img>
                </a>
            </div>

        )
    }
}