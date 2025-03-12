import Container from './Container'
import marioAndAdreaA from '../assets/img/Mario and Adrian A.jpg'
import marioAndAdreaB from '../assets/img/Mario and Adrian b.jpg'

export default function About(props) {
    return (
        <section id = 'About' className = 'my-5'>
            <Container className= 'container mt-lg-5 d-block d-lg-inline-flex justify-lg-content-betwen column-gap-lg-3 px-lg-0'>
            <Container className = 'flex-basis-50 mx-0 pe-3'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    </p>
                </Container>
                <Container idName = 'owners' className = 'flex-basis-50'>
                    <Container className = 'about-image1'>
                        <img src={marioAndAdreaA} alt = 'Mario and Andrea' width="100%"/>
                    </Container>
                    <Container className = 'about-image2'>
                    <img src={marioAndAdreaB} alt = 'Mario and Andrea as well' width="100%"/>
                    </Container>
                </Container>
            </Container>
        </section>
    )
}