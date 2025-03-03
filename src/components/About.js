import Container from './Container'

export default function About(props) {
    return (
        <section id = 'About' className = 'my-5'>
            <Container className= 'container mt-lg-5 d-block d-lg-inline-flex justify-lg-content-betwen column-gap-lg-3 px-lg-0'>
            <Container className = 'flex-basis-50 mx-0'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    </p>
                </Container>
                <Container id = 'owners' className = 'flex-basis-50'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    </p>
                </Container>
            </Container>
        </section>
    )
}