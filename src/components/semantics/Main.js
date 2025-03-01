import Container from "../Container"
import Highlights from "../Highlights"
import Testimonials from "../Testimonials"
import About from "../About"

export default function Main(props) {
    return (
        <main className="container-fluid col-lg-8 mt-5 mx-auto flex-column flex-lg-row text-left my-5">
            <Highlights />
            <Testimonials />
            <About />
        </main>
    )
}