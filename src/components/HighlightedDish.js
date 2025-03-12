import Container from './Container'

export default function HighlightedDish(props) {
    return (
        <Container className = 'flex-basis-33 bg-body-primary rounded-bottom-4'>
            
            <Container className = 'bg-body'>
                <img width='100%' src={props.imgSrc} alt={props.imgAlt} className = 'rounded-top-4' />
            </Container>
            
            <Container className = 'd-block d-lg-inline-flex justify-lg-content-betwen px-2 mx-auto'>
                <h4>{props.name}</h4><h4>{props.price}</h4>
            </Container>

            <p className = 'px-2 mx-auto'>{props.description}</p>

            <Container className = ''>
            <p className = 'px-2'>Order a delivery</p>    
            </Container>
            
        </Container>
    )
}