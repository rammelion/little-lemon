import Container from "./Container"


export default function Testimonial(props) {
    const url="https://i.pravatar.cc/64?img" + Math.random(100)
    return (
        <>
            <Container className = 'flex-basis-25 mx-lg-center px-4 rounded-3 bg-body-secondary'>
                <h4 className = 'text-center mb-4'>Rating</h4>
                <Container className = 'd-block d-lg-inline-flex justify-lg-content-between'>
                    <img src={url} alt="User" className = 'flex-basis-50 rounded-4 mb-1 me-xl-4'/>
                    <h4>Name</h4>
                </Container>
                <p>Review text</p>
            </Container>
        </>
    )
}
