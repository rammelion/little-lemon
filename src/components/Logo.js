export default function Logo(props) {
    if (props.location==='nav') {
        return (
            <img src={'/Logo.svg'} alt="Litte Lemon Logo"></img>
        )
    } else {
        return (
            <div>
                <img src={'/logo.png'} alt="Litte Lemon Logo"></img>
            </div>
            
        )
    }
    
}