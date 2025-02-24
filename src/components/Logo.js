import horinzontalLogo from './assets/img/Logo.svg'
import standAloneLogo from './assets/img/logo.png'
export default function Logo(props) {
    if (props.type==='horizontal') {
        return (
                <img src={horinzontalLogo} alt="Litte Lemon Logo" width={props.width}></img>
        )
    } else if (props.type==='standalone') {
        return (
            <img src={standAloneLogo} alt="Litte Lemon Logo" width={props.width}></img>
        )
    }
}