import Nav from './Nav'
import restaurantFood from '../assets/img/restauranfood.jpg'
import Container from "../Container"

export default function Header() {
    return (
        <header className='container flex col-lg-8 mx-lg-auto my-5'>
            <Container idName="hero" classes="container d-lg-inline-flex px-lg-0">
                <Container classes="flex-basis-50">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button>Reserve a Table</button>
                </Container>
                <Container classes="hero-image-wrapper flex-basis-50">
                    <Container classes="hero-image">
                        <img src={restaurantFood} alt="Restaurant Food"/>
                    </Container>
                </Container>
            </Container>
        </header>
    )
}