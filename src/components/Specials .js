import Container from "./Container";
import HighlightedDish from "./HighlightedDish";
import greekSalad from '../assets/img/menu/greek salad.jpg'
import bruschetta from '../assets/img/menu/Bruschetta.png'
import lemonDessert from '../assets/img/menu/lemon dessert.jpg'

export default function Specials (props) {
    return (
        <section id = 'Highlights'>
            <Container className = 'container d-block d-lg-inline-flex justify-lg-content-betwen'>
                <Container className = 'flex-basis-50'>
                    <h3>This week specials</h3>
                </Container>
                <Container className = 'text-right flex-basis-50'>
                    <button type="button" className = 'right-button'>Online Menu</button>
                </Container>
            </Container>

            <Container className = 'container mx-lg--auto- px-0 py-0 mt-lg-5 d-block d-lg-inline-flex justify-lg-content-betwen column-gap-lg-5'>
                <HighlightedDish imgSrc={greekSalad} imgAlt="Greek salad" name="Greek Salad" price="$12.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
                <HighlightedDish imgSrc={bruschetta} imgAlt="Bruschetta" name="Bruschetta" price="$5.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
                <HighlightedDish imgSrc={lemonDessert} imgAlt="Lemon dessert" name="Greek Salad" price="$5.00" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
            </Container>
        </section>
    )
}