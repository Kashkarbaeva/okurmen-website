import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
    {
      id: 1,
      name: 'Жон Уиллс',
      description: 'Лорем ипсум долор сит Амет, консекттур адиписинг элит. Купидитат, волуптатибус волуптат, Долорес нам аккузантиум катасы,Моди юре итаке тотам эмгек.',
      designation: 'Жетекчи'
    },
    {
      id: 2,
      name: 'Жасмин Перри',
      description: 'Негизги учак болгон биздин компанияга кызыгууңуз үчүн рахмат. Бирок, улуулар убакыттын өтүшү менен азыраак түшүнүү үчүн тайып кетишет! Жок, эң негизгиси жумушка кайтуу, ошондуктан бизде башкача иштөө ыкмасы бар, бул үчүн, ХХ!',
      designation: 'Accountant'
    },
    {
      id: 3,
      name: 'Рокки Жонсон',
      description: 'Негизги жеткирүүчү болгон биздин компанияга кызыгууңуз үчүн рахмат. Физикалык ката кетирүүнүн эң оңой жолу-ката кетиргендерди жемелөө. Жыгылуу Аспергер синдромубу?',
      designation: 'аткаруучу директор'
    }
  ]

function AppTestimonials () {
    return (
        <section id="testimonials" className="testimonials-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Кардарлардын көрсөтмөлөрү</h2>
                    <div className="subtitle">кардар биз жөнүндө эмне дейт</div>
                </div>
                <Carousel controls={false}>
                    {
                        testimonialsData.map((testimonials) => {
                            return (
                                <Carousel.Item key={testimonials.id}>
                                    <blockquote>
                                        <p>{testimonials.description}</p>
                                        <cite>
                                            <span className="name">{testimonials.name}</span>
                                            <span className="designation">{testimonials.description}
                                            </span>
                                        </cite>
                                    </blockquote>
                                </Carousel.Item>
                            );
                        })}
                </Carousel>
            </Container>
        </section>
    )
}

export default AppTestimonials;
