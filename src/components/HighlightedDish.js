import Container from './Container'

export default function HighlightedDish(props) {
    return (
        <Container classes="flex-basis-33 mx-4 bg-body-secondary rounded-bottom-4">
            
            <Container classes='bg-body'>
                <img width='100%' src={props.imgSrc} alt={props.imgAlt} className='rounded-top-4' />
            </Container>
            
            <Container classes='d-block d-lg-inline-flex justify-lg-content-betwen px-2 mx-auto'>
                <h4>{props.name}</h4><h4>{props.price}</h4>
            </Container>

            <p className='px-2 mx-auto'>{props.description}</p>

            <Container classes="">
            <p className='px-2'>Order a delivery</p>    
            </Container>
            
        </Container>
    )
}