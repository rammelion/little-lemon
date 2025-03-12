import Container from './Container'
import Testimonial from './Testimonial'

export default function CustomersSay(props) {
    return (
        <section id = 'Testimonials' className = 'my-2'>
            <Container className = 'container mt-lg-5 px-0 py-0 d-block d-lg-inline-flex justify-lg-content-betwen column-gap-lg-4'>
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </Container>
        </section>
    )
}