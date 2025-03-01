import Container from "./Container"


export default function Testimonial(props) {
    const imageUrl="https://i.pravatar.cc/64?img" + Math.random(100)
    return (
        <>
            <Container classes='flex-basis-25 mx-lg-center px-4'>
                <h4 className="text-center mb-4">Rating</h4>
                <Container classes='d-block d-lg-inline-flex'>
                    <img src={imageUrl} alt="User's picture" className="flex-basis-50 rounded-4 mb-4 mr-4"/>
                    <h4 className="flex-basis-50">Name</h4>
                </Container>
                <p>Review text</p>
            </Container>
        </>
    )
}
